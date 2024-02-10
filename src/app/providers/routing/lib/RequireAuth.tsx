import { useAppSelector } from "shared/lib/hooks/useAppSelector"

export const getRequireAuth = (defautlPage: React.ReactNode) => ({ children }: { children: React.ReactNode }) => {
  const authData = useAppSelector(state => state.authReducer.authData)

  if (!authData) { return defautlPage }

  return children
}
