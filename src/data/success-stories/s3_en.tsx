import { Row } from "@/src/types/interfaces";

const strory3_en: Row[] = [
  {
    type: "normalRow",
    props: {
      title: "Challenges in Order Management and Enhancing Customer Experience",
      text: "Zwaya Lounge, known for its tranquil atmosphere and excellent service, faced challenges managing orders and processing bills during peak hours. Traditional methods often led to errors, inefficiencies, and customer dissatisfaction. The need for a comprehensive solution to streamline operations and elevate the customer experience was pressing.",
    },
  },
  {
    type: "rowDottedHighlited",
    props: {
      title: "Solution for Streamlining Operations and Boosting Customer Satisfaction",
      quoteBefore: "To address these challenges, Zwaya Lounge partnered with Amrk to implement a complete solution that included:",
      content: [
        {
          text: "Table Ordering and Payment:",
          highlight: false,
          description: "Leveraging Amrk’s Restaurant Management System (RMS), Zwaya Lounge enabled customers to place orders and make payments directly from their mobile phones using a QR code at each table. This seamless integration streamlined operations and saw 9% of orders processed directly through customers’ devices.",
        },
        {
          text: "Minimum Charge Management:",
          highlight: false,
          description: "Using Amrk’s Table Management feature, Zwaya Lounge easily set and managed minimum charges for groups at specific tables during peak times. This feature allowed for revenue optimization while ensuring a smooth customer experience.",
        },
        {
          text: "Loyalty Program:",
          highlight: false,
          description: "With Amrk’s Loyalty Program, Zwaya Lounge introduced a points-based rewards system, enabling customers to earn points and redeem free purchases. This helped increase repeat visits and deepen customer engagement.",
        },
      ],
    },
  },
  {
    type: "rowDottedHighlited",
    props: {
      title: "Tangible Results and Enhanced Customer Experience",
      quoteBefore: "Tangible Results and Enhanced Customer Experience:",
      content: [
        {
          text: "Increased Efficiency:",
          highlight: false,
          description: "Amrk’s RMS streamlined daily operations, from inventory management to staff scheduling, freeing up management to focus on delivering excellent service.",
        },
        {
          text: "Order Accuracy:",
          highlight: false,
          description: "The table-side online ordering system reduced errors and wait times, allowing customers to place orders and pay seamlessly, resulting in higher customer satisfaction.",
        },
        {
          text: "Enhanced Customer Experience:",
          highlight: false,
          description: "Customers loved the convenience of online ordering, real-time order tracking, and loyalty rewards. These features not only boosted customer satisfaction but also led to an increase in repeat orders and positive reviews.",
        },
      ],
      quoteAfter: "By adopting Amrk’s services, Zwaya Lounge effectively tackled the challenges of high order volumes and operational complexities. The partnership has significantly improved efficiency and customer satisfaction, strengthening Zwaya Lounge’s reputation as a top dining destination. Abdullah highly recommends Amrk to any restaurant seeking to streamline operations and deliver an exceptional customer experience. The results speak for themselves.",
    },
  },
];

export default strory3_en;

export const quote = {
  qoute: "The combination of the online ordering system, loyalty program, and RMS has simplified our operations and significantly improved customer service during peak hours. Our customers appreciate the convenience, and we’ve seen a boost in orders and positive feedback.",
  person: "— Mr Abdullah Al-Maily, Founder of Zwaya Lounge",
};
