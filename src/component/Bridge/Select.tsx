import { StargateWidget } from "./Stargate"

export const BridgeSelect = () => {
    return (
        <div className="text-center" id="bridge">
            <h3 className="font-freckle text-3xl">Bridge with LayerZero</h3>
            <p className="mb-4">transfer your assets from one blockchain network to another.</p>
            <StargateWidget />
        </div>
    )
}


