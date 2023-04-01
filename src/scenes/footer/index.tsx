import Logo from "@/assets/Logo1.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
                ロレム・イプサムの嘆き、トマト大好き学部のエリット、しかし時と活力、そのような労働と悲しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。
            </p>
            <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">体験・エンタメ</p>
            <p className="my-5">サイトポリシー</p>
            <p>プライバシーポリシー</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">お問合せ</h4>
            <p className="my-5">スタッフ募集</p>
            <p>(333)425-6825</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;