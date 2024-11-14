import os

# Base directory where the new folders will be created
base_directory = "./"

# List of .tsx filenames
tsx_files = [
    "crm-marketing.tsx",
    "delivery-integration.tsx",
    "icons.tsx",
    "integrated-walkie-talkie.tsx",
    "kitchen-display.tsx",
    "offline-mode.tsx",
    "pos.tsx",
    "service-display.tsx",
    "table-management.tsx"
]

# Code template for each page.tsx file
code_template = """import PromoSection from "@/src/components/promotion-section/promotion-section";
import BulletPoints from "@/src/components/services/bullet-points";
import ServiceHero from "@/src/components/services/hero";
import ServiceSummary from "@/src/components/services/service-summary";
import {{ Locale }} from "@/src/i18n-config";

import {{ promoContent, promoContent_en }} from "@/src/data/global/promo-text";
import {{ contentData, contentData_en }} from "@/src/data/RMS/{component_name}";

export default async function {component_name_capitalized}Page(props: {{
    params: Promise<{{ lang: Locale }}>;
}}) {{
    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const contentDataToUse = isEnglish ? contentData_en : contentData;
    const promoContentToUse = isEnglish ? promoContent_en : promoContent;

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-10 md:gap-[120px] mt-12 md:mt-[120px] mb-[80px]">
                {{contentDataToUse.map((content, index) => {{
                    switch (content.type) {{
                        case "ServiceHero":
                            return <ServiceHero key={{index}} {{...content.props}} />;
                        case "BulletPoints":
                            return <BulletPoints key={{index}} {{...content.props}} />;
                        case "ServiceSummary":
                            return <ServiceSummary key={{index}} {{...content.props}} />;
                        default:
                            return null;
                    }}
                ))}}
            </div>
            <PromoSection content={{promoContentToUse}} />
        </section>
    );
}}"""

# Create folders and generate the page.tsx files
for tsx_file in tsx_files:
    component_name = tsx_file.replace(".tsx", "")
    component_name_capitalized = component_name.replace("-", " ").title().replace(" ", "")
    folder_path = os.path.join(base_directory, component_name)

    # Create the directory if it does not exist
    os.makedirs(folder_path, exist_ok=True)

    # Generate the modified code for each component
    modified_code = code_template.format(
        component_name=component_name,
        component_name_capitalized=component_name_capitalized
    )

    # Write the code to a page.tsx file in the created folder
    with open(os.path.join(folder_path, "page.tsx"), "w") as file:
        file.write(modified_code)

print("Folders and page.tsx files have been created successfully.")
