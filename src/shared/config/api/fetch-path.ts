enum enumFetchPath {
  POINT = 'point',
  REPORT = 'report',
  LOGIN = 'login',
  REGISTRATION = 'registration'
}

export const fetchPath: Record<enumFetchPath, string> = {
  [enumFetchPath.POINT]: 'points',
  [enumFetchPath.REPORT]: 'point/id/reports',
  [enumFetchPath.LOGIN]: 'login',
  [enumFetchPath.REGISTRATION]: 'reg'
}
