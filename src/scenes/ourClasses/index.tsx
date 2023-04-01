import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "ウエイトトレーニング",
        description:
        "ロレム・イプサムの嘆き、トマト大好き学部のエリット、しかし時と活力、そのような労働と悲しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。",
        image: image1,
    },
    {
        name: "ヨガ",
        image: image2,
    },
    {
        name: "アブコア コース",
        description:
        "ロレム・イプサムの嘆き、トマト大好き学部のエリット、しかし時と活力、そのような労働と悲しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。",
        image: image3,
    },
    {
        name: "アドベンチャー コース",
        description:
        "ロレム・イプサムの嘆き、トマト大好き学部のエリット、しかし時と活力、そのような労働と悲しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。",
        image: image4,
    },
    {
        name: "フィットネス コース",
        image: image5,
    },
    {
        name: "トレーニング コース",
        description:
        "ロレム・イプサムの嘆き、トマト大好き学部のエリット、しかし時と活力、そのような労働と悲しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="md:w-3/5">
                    <HText>コース</HText>
                    <p className="py-5">
                    部活や勉強や、好きなコトに一生懸命がんばっている高校生たち。<br/>
まだ夢や希望、自分自身を見つけられずに探している高校生たち。<br/>
それぞれの立場で、それぞれの人生と向き合っている高校生たち。<br/>
子どもでもなく、大人でもない15歳---18歳までのこの時期にこそ、ヘルシアプレイスが必要なのでは？と、わたしたちは考えました。
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-auto">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses