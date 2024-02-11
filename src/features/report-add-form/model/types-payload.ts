export interface IReportForm {
    id: number
    files: FormData[],
    message: string,
    pollutionLevel: number
}