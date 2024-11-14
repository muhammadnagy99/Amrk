import DemoSchedule from "@/src/components/demo-schedule/demo-shedule";
import { demoScheduleData, demoScheduleData_en } from "@/src/data/demo-schedule/demo-data";
import { Locale } from "@/src/i18n-config";

export default async function DemoPage(props: { params: Promise<{ lang: Locale }> }) {
    const params = await props.params;

    const isEnglish = params.lang === 'en';

    const content = isEnglish ? demoScheduleData_en : demoScheduleData;

    return (
        <>
            <DemoSchedule content={content} />
        </>
    );
}
