import Image from "next/image"
import React from "react"
import { ICoinMarket } from "../interfaces/ICoinMarket"

function LogoCoin({ coin }: { coin: ICoinMarket }) {
  return (
    <div className="flex items-center gap-4">
      <Image src={coin.image} width="50px" height="50px" />
      <div className="w-20 line-clamp-2">
        <p className="truncate">{coin.name}</p>
      </div>
    </div>
  )
}

export default LogoCoin
