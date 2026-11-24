export interface ICar {
    brand: string
    model: string
    init(): void
    drive(): void
    stop(): void
}