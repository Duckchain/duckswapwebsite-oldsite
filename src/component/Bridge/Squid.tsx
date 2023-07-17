
import { SquidWidget } from "@0xsquid/widget";

export function Squid() {
    return (
        <div className="flex justify-content items-center">
            <SquidWidget config={
                {
                    "integratorId": "squid-swap-widget",
                    "companyName": "Custom",
                    "style": {
                        "neutralContent": "#B1ACA1",
                        "baseContent": "#723a05",
                        "base100": "#474745",
                        "base200": "#212428",
                        "base300": "#13181D",
                        "error": "#ED6A5E",
                        "warning": "#723a05",
                        "success": "#2EAEB0",
                        "primary": "#723a05",
                        "secondary": "#E9DCBD",
                        "secondaryContent": "#01020C",
                        "neutral": "#0C0F12",
                        "roundedBtn": "24px",
                        "roundedCornerBtn": "8px",
                        "roundedBox": "20px",
                        "roundedDropDown": "8px"
                    },
                    "slippage": 1.5,
                    "infiniteApproval": false,
                    "enableExpress": true,
                    "apiUrl": "https://api.squidrouter.com",
                    "comingSoonChainIds": [
                        "cosmoshub-4",
                        "injective-1",
                        "kichain-2"
                    ],
                    "titles": {
                        "swap": "Swap",
                        "settings": "Settings",
                        "wallets": "Wallets",
                        "tokens": "Select Token",
                        "chains": "Select Chain",
                        "history": "History",
                        "transaction": "Transaction",
                        "allTokens": "Select Token",
                        "destination": "Destination address"
                    },
                    "priceImpactWarnings": {
                        "warning": 3,
                        "critical": 5
                    }
                }
            } />
        </div>
    )
}
