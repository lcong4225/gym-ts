import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefits";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "最先端の施設",
        description:
        "コーチングは趣味でもありません。 子供たちのベッドのパン種のために痛みを飛ばしましょう。",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "何百もの多様なクラス",
        description:
        "サッカーでは、常に誰かがそれを引き起こすので、その時に笑う必要があります。 追跡して毒殺するのも簡単ではありません。 それは必要で醜いです。",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "エキスパートとプロのトレーナー",
        description:
        "明日はちょっと仕事です。 本を読めばわかるはずです。 湖を私の子供にしましょう。 彼らは宿題を出します。",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const index = ({setSelectedPage}: Props) => {
    return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                <HText>単なるジムではありません</HText>
                <p className="my-5 text-sm">
            世界クラスのフィットネス機器、トレーナー、クラスを提供し、究極のフィットネス目標を簡単に達成できるようにします。 メンバー一人ひとりに真のケアを提供します。
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={ container }
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHIC AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div className="relative">
                                <HText>
                                    何百万人もの幸せなメンバーを獲得{" "}
                                    <span className="text-primary-500">フィット</span>
                                </HText>
                            </div>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5">ティンシダントの作者、鉄の塊が生まれる。 強者の目的を追うため、アルトリスを追う。 人生の飢餓は誰ですか？ 誰がげっぷのチンキダントになるつもりですが、決してそうではありません。 しかし、バスケットボール コートの目標を達成するのは簡単なはずです。</p>
                        <p className="mb-5">Fringilla は週末の出場停止処分を受けました。ロンカスは、地域または航空会社のいずれかです。</p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                今すぐ参加しよう！
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
    )
}

export default index