import { useState, useEffect } from "react";
import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
} from "date-fns";

export function CountDown({ date }: any) {
    const [timeLeft, setTimeLeft] = useState<any>({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const targetDate = new Date(date ? date : "2023-9-11");
            const days = differenceInDays(targetDate, now);
            const hours = differenceInHours(targetDate, now) % 24;
            const minutes = differenceInMinutes(targetDate, now) % 60;
            const seconds = differenceInSeconds(targetDate, now) % 60;
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-5 mt-10">
            <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-2">
                    <div className="bg-[#723a05] text-white p-4 rounded-lg text-center">
                        <div className="font-bold sm:text-[1.1rem] text-[0.6em]">DAYS</div>
                        <div className="text-4xl">{timeLeft.days || "0"}</div>
                    </div>
                    <div className="bg-[#723a05] text-white p-4 rounded-lg text-center">
                        <div className="font-bold sm:text-[1.1rem] text-[0.6em]">HOURS</div>
                        <div className="text-4xl">{timeLeft.hours || "0"}</div>
                    </div>
                    <div className="bg-[#723a05] text-white p-4 rounded-lg text-center">
                        <div className="font-bold sm:text-[1.1rem] text-[0.6em]">MINUTES</div>
                        <div className="text-4xl">{timeLeft.minutes || "0"}</div>
                    </div>
                    <div className="bg-[#723a05] text-white p-4 rounded-lg text-center">
                        <div className="font-bold sm:text-[1.1rem] text-[0.6em]">SECONDS</div>
                        <div className="text-4xl">{timeLeft.seconds || "0"}</div>
                    </div>
                </div>
            </div>
        </div>)
}