export type AuthState = "signed_out" | "basic_user" | "entitled_user"

export interface SessionClaims {
  sub: string | null
  email: string | null
  authenticated: boolean
  roles: string[]
  permissions: string[]
  entitlements: string[]
  scope: string
}

export interface ApiResponse {
  status: number
  statusText: string
  body: Record<string, unknown>
}

export interface StateInfo {
  label: string
  description: string
}
