import dayjs from "dayjs";

export const handler = () => {
    console.log("time", dayjs().toISOString());
};