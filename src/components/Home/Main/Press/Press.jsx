const Press = () => {
    return (

        <section id="press" className="paddingverticaldouble bg-graylight">
        <h2 className="textcenter marginbottomfull">Press</h2>
        <div className="gridrow">
            <div className="col-12 col-t-4">
                <a href="https://hypebeast.com/2020/5/yohji-yamamoto-replica-spring-summer-1996-capsule-collection-release-info" target="_blank" title="View Look" className="press-card">
                    <div className="press-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/press/press01.jpg 720w, ./../../src/assets/imgs/press/medium/press01.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press01.jpg" />
                    </div>
                    <p>Replica Collection</p>
                </a>
            </div>
            <div className="col-12 col-t-4">
                <a href="https://www.thailandtatler.com/style/yohji-yamamoto-designs-a-new-watch-from-hublot" target="_blank" title="View Look" className="press-card">
                    <div className="press-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/press/press02.jpg 720w, ./../../src/assets/imgs/press/medium/press02.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press02.jpg" />
                    </div>
                    <p>Hublot Collaboration</p>
                </a>
            </div>
            <div className="col-12 col-t-4">
                <a href="https://flaunt.com/content/dr-martens-yohji-yamamoto" target="_blank" title="View Look" className="press-card">
                    <div className="press-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/press/press03.jpg 720w, ./../../src/assets/imgs/press/medium/press03.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press03.jpg" />
                    </div>
                    <p>Dr Martens vs Yamamoto</p>
                </a>
            </div>
        </div>
        <div className="central-link">
            <a href="#" title="More News">Show More</a>
        </div>
        </section>

    );
};

export default Press