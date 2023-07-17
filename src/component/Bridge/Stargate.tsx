export const StargateWidget = () => {
    return (
        <div className="flex items-center justify-center md:w-1/4 mx-auto rounded-md">
            <stargate-widget theme="light" partnerId="0x0021" feeCollector="0xc13b65f7c53Cd6db2EA205a4b574b4a0858720A6" tenthBps="10" />
        </div>
    )
}