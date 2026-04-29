import type { ApiResponse, AuthState, SessionClaims, StateInfo } from "./types"

export const SESSION_DATA: Record<AuthState, SessionClaims> = {
  signed_out: {
    sub: null,
    email: null,
    authenticated: false,
    roles: [],
    permissions: [],
    entitlements: [],
    scope: ""
  },
  basic_user: {
    sub: "usr_basic_123",
    email: "basic-user@local.test",
    authenticated: true,
    roles: ["member"],
    permissions: ["profile:read"],
    entitlements: [],
    scope: "openid profile email"
  },
  entitled_user: {
    sub: "usr_entitled_456",
    email: "entitled-user@local.test",
    authenticated: true,
    roles: ["member"],
    permissions: ["profile:read"],
    entitlements: ["auth_lab_access"],
    scope: "openid profile email"
  }
}

export const API_RESPONSES: Record<AuthState, ApiResponse> = {
  signed_out: {
    status: 401,
    statusText: "Unauthorized",
    body: {
      error: "authentication_required",
      message: "No valid session found. Product access remains locked."
    }
  },
  basic_user: {
    status: 403,
    statusText: "Forbidden",
    body: {
      error: "missing_entitlement",
      message: "User is authenticated but missing the entitlement required for product access",
      requiredEntitlement: "auth_lab_access"
    }
  },
  entitled_user: {
    status: 200,
    statusText: "OK",
    body: {
      message: "Access granted because the required entitlement is present",
      user: {
        id: "usr_entitled_456",
        email: "entitled-user@local.test"
      },
      entitlements: ["auth_lab_access"],
      productAccess: "unlocked"
    }
  }
}

export const STATE_INFO: Record<AuthState, StateInfo> = {
  signed_out: {
    label: "Signed Out",
    description: "No valid session exists, so the API returns 401 Unauthorized and product access stays locked."
  },
  basic_user: {
    label: "Basic User",
    description: "An authenticated identity exists, but the required entitlement is missing, so the API returns 403 Forbidden and product access stays locked."
  },
  entitled_user: {
    label: "Entitled User",
    description: "An authenticated identity exists and the required entitlement is present, so the API returns 200 OK and product access is unlocked."
  }
}
