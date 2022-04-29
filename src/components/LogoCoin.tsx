import Image from "next/image"
import React from "react"
import { ICoinMarket } from "../interfaces/ICoinMarket"

function LogoCoin({ coin, coinName }: { coin: ICoinMarket; coinName: string }) {
  return (
    <div className="flex items-center gap-4">
      <Image src={coin.image} width="50px" height="50px" alt={`${coinName}`} />
      <div className="w-20 line-clamp-2">
        <h4 className="truncate">{coin.name}</h4>
      </div>
    </div>
  )
}

export default LogoCoin
