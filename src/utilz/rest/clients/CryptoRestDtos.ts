

export interface CryptoPostRestLoginResponseDto {
    token:string
}

export interface CryptoGetRestUserDetailsResponseDto {
    name:string,
    email:string,
    modules:Array<string>,
    superUser:boolean
    userId:Number
}
export interface CryptoGetRestProcessHistoryDetailsResponseDto {
    details:{},
    processId:Number,
    startTime:string,
    endTime:string,
    status:string,
    name:string,
}

export interface CryptoGetRestCryptoAssetsResponseDto {
    totalAssetOfBtc:Number,
    balances:Array<{
        asset:string,
        free:Number,
        locked:Number,
    }>
}