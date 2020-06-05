<template>
    <div class="index-page">

        <div class="carousel-box">
            <el-carousel trigger="click" :height="carouselHeight + 'px'">
                <!-- <el-carousel-item>
                    <img src="../../assets/img/banner01.png" alt="首页轮播图">
                </el-carousel-item> -->
                <el-carousel-item>
                    <img src="../../assets/img/banner1.png" alt="首页轮播图">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../../assets/img/banner03.png" alt="首页轮播图">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="advantage-box">

        <div class="common-title">
            <div class="title-name">
                <span>核心优势</span>
            </div>
<!--            <div class="title-eng">CORE STRENGTHS</div>-->
        </div>

            <div class="advantage-item-box">
            <el-row :gutter="39">
                <el-col :xs="24" :sm="24" :lg="8">
                    <div class="advantage-item">
                        <img src="../../assets/img/advantage1.png">
                        <div class="advantage-text">
                        <p>多行业</p>
                        <p>场景应用</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :lg="8">
                    <div class="advantage-item">
                        <img src="../../assets/img/advantage2.png">
                        <p>大规模</p>
                        <p>场景应用</p>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :lg="8">
                    <div class="advantage-item">
                        <img src="../../assets/img/advantage3.png">
                        <p>一流的</p>
                        <p>研发团队</p>
                    </div>
                </el-col>
            </el-row>
            </div>
<!--            <div class="look-more-advantage" v-show="false">-->
<!--                <span @click="goAdvantage">了解更多</span>-->
<!--            </div>-->
        </div>

        <div class="solution-box">
            <div class="common-title">
                <div class="hidden-lg-and-up title-name">
                    <span>解决方案</span>
                </div>
                <div class="title-desc">+金融 ｜ AI+政务 ｜ AI+产业</div>
            </div>
            <el-row :gutter="0">
                <el-col :xs="24" :sm="24" :lg="8">
                    <div class="solution-item1">
                        <div class="bottom-text-box">
                        <p>中国建设银行数据中台解决方案</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :lg="8">
                    <div class="solution-item2">
                        <div class="bottom-text-box">
                        <p>上汽集团数据中台解决方案</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :lg="8">
                    <div class="solution-item3">
                        <div class="bottom-text-box">
                        <p>上海浦东“一网通办”智能审批</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div  class= "button-position">
                <a  class="more-case"  href="#" title="more cases">more cases</a>
            </div>
        </div>

        <div class="news-box">
            <div class="common-title">
                <div class="title-name">
                    <span>新闻动态</span>
                </div>
                <!--            <div class="title-eng">CORE STRENGTHS</div>-->
            </div>

            <div class="news-item-box">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :lg="6">
                        <div class="news-item">
                            <img src="../../assets/img/新闻1.png">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :lg="6">
                        <div class="news-item">
                            <img src="../../assets/img/新闻2.png">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :lg="6">
                        <div class="news-item">
                            <img src="../../assets/img/新闻3.png">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :lg="6">
                        <div class="news-item">
                            <img src="../../assets/img/新闻4.png">
                        </div>
                    </el-col>
                </el-row>
        </div>
        </div>
<!--        <div class="business-box">-->
<!--            <div class="common-title">-->
<!--                <div class="hidden-lg-and-up title-name">-->
<!--                    <img src="../../assets/img/title-left.png">-->
<!--                    <span>业/务/模/式</span>-->
<!--                    <img src="../../assets/img/title-right.png">-->
<!--                </div>-->
<!--                <div class="hidden-md-and-down title-name">-->
<!--                    <img src="../../assets/img/title-left2.png">-->
<!--                    <span>业/务/模/式</span>-->
<!--                    <img src="../../assets/img/title-right2.png">-->
<!--                </div>-->
<!--                <div class="title-eng">BUSINESS MODEL</div>-->
<!--                <div class="title-desc">千亿市场赛道上的平台型Fintech公司</div>-->
<!--            </div>-->
<!--            <img class="business-img" src="../../assets/img/business.jpg">-->
<!--        </div>-->

        <div class="partner-box">
            <div class="common-title">
                <div class="title-name">
                    <span>合作伙伴及客户</span>
                </div>
<!--                <div class="title-eng">COOPERATION PARTNERS</div>-->
            </div>

            <partner />

            <!-- <div class="switch-span">
                <span :class="{'switch-active': active === 'business'}" @click="active = 'business'">商业</span>
                <span :class="{'switch-active': active === 'financial'}" @click="active = 'financial'">金融</span>
                <span :class="{'switch-active': active === 'school'}" @click="active = 'school'">高校</span>
                <span :class="{'switch-active': active === 'goverment'}" @click="active = 'goverment'">政府</span>
            </div>

            <div class="partner-list">
                <partnerBusiness v-if="active === 'business'" />
                <partnerFinancial v-if="active === 'financial'" />
                <partnerSchool v-if="active === 'school'" />
                <partnerGoverment v-if="active === 'goverment'" />
            </div> -->
        </div>
    </div>
</template>

<script>
// import partnerBusiness from './partnerBusiness';
// import partnerFinancial from './partnerFinancial';
// import partnerSchool from './partnerSchool';
// import partnerGoverment from './partnerGoverment';
import partner from './partner';

export default {
    name: 'Index',
    components: {
        // partnerBusiness,
        // partnerFinancial,
        // partnerSchool,
        // partnerGoverment,
        partner,
    },
    data() {
        return {
            carouselHeight: 700,
            active: 'business',
        };
    },
    mounted() {
        document.title = '思贤科技-首页';
        this.setHeight();
        window.addEventListener('resize', () => {
            this.setHeight();
        });
    },
    methods: {
        setHeight() {
            this.$nextTick(() => {
                const width = document.body.clientWidth;
                if (width < 768) {
                    this.carouselHeight = 200;
                } else if (width >= 768 && width <= 1200) {
                    this.carouselHeight = 300;
                } else if (width > 1200) {
                    this.carouselHeight = 700;
                } else {
                    this.carouselHeight = 700;
                }
            });
        },
        goAdvantage() {
            this.$router.push('/advantage');
        },
    },
};
</script>

<style lang="scss">
@import "../../assets/css/global.scss";
.index-page{
    @media screen and (max-width: 767px) {
        .carousel-box{
            .el-carousel__item{
                img{
                    width: 100%;
                    height: 1016px;
                    object-fit: cover;
                }
            }
        }
        .advantage-box{
            position: relative;
            /*background: url('../../assets/img/background01.png') no-repeat center;*/
            .advantage-item{
                width: 90%;
                margin: 0 auto 20px;
                box-shadow:0 6px 10px 0 #d8d8d8;
                img{
                    vertical-align: middle;
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                p{
                    background:#3f98ff;
                    line-height: 40px;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                }
            }
            .look-more-advantage{
                margin-top: 24px;
                display: flex;
                justify-content: center;
                span{
                    cursor: pointer;
                    width: 80px;
                    line-height: 30px;
                    text-align: center;
                    background: #3f98ff;
                    font-size: 12px;
                    color: #fff;
                }
            }
        }
        .business-box{
            position: relative;
            .business-img{
                width: 90%;
                margin-left: 5%;
                height: auto;
                vertical-align: middle;
            }
        }
        .partner-box{
            .switch-span{
                display: flex;
                justify-content: center;
                span{
                    cursor: pointer;
                    width: 60px;
                    height: 20px;
                    border:1px solid #4a90e2;
                    text-align: center;
                    line-height: 18px;
                    font-size: 12px;
                    color:#4a90e2;
                    margin: 0 5px;
                }
                .switch-active{
                    background: #4a90e2;
                    color: #fff;
                }
            }
            .partner-list{
                width: 90%;
                margin: 0 auto;
                margin-top: 30px;
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1200px) {
        .carousel-box{
            .el-carousel__item{
                img{
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }
            }
        }
        .advantage-box{
            .advantage-item{
                width: 80%;
                margin: 0 auto 20px;
                box-shadow:0 6px 10px 0 #d8d8d8;
                img{
                    vertical-align: middle;
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }
                p{
                    background:#3f98ff;
                    line-height: 60px;
                    text-align: center;
                    font-size: 16px;
                    color: #fff;
                }
            }
            .look-more-advantage{
                margin-top: 36px;
                display: flex;
                justify-content: center;
                span{
                    cursor: pointer;
                    width: 80px;
                    line-height: 30px;
                    text-align: center;
                    background: #3f98ff;
                    font-size: 14px;
                    color: #fff;
                }
            }
        }
        .business-box{
            position: relative;
            .business-img{
                width: 80%;
                margin-left: 10%;
                height: auto;
                vertical-align: middle;
            }
        }
        .partner-box{
            .switch-span{
                display: flex;
                justify-content: center;
                span{
                    cursor: pointer;
                    width: 100px;
                    height: 26px;
                    border:1px solid #4a90e2;
                    text-align: center;
                    line-height: 24px;
                    font-size: 14px;
                    color:#4a90e2;
                    margin: 0 7px;
                }
                .switch-active{
                    background: #4a90e2;
                    color: #fff;
                }
            }
            .partner-list{
                width: 80%;
                margin: 40px auto 0;
            }
        }
    }
    @media screen and (min-width: 1201px) {
        .carousel-box{
            .el-carousel__item{
                img{
                    width: 100%;
                    height: 700px;
                    object-fit: cover;
                }
            }
        }

        .advantage-box{
            width: 100%;
            margin: 0 auto;
            background: url('../../assets/img/background01.png') no-repeat center;
            background-size: 100% 100%;
            .advantage-item-box{
                width: 1438px;
                position: relative;
                margin-left: auto ;
                margin-right: auto;
            .advantage-item{
                background: #FFFFFF;
                box-shadow:0 6px 10px 0 #d8d8d8;
                img{
                    vertical-align: middle;
                    margin:63px 140px 75px 140px;
                }
                p{
                    background:#FFFFFF;
                    /*line-height: 80px;*/
                    text-align: center;
                    font-size: 30px;
                    color: #1F1F1F;
                    line-height: 46px;
                    letter-spacing: 0.2px;
                }
            }
            }
            .look-more-advantage{
                margin-top: 48px;
                display: flex;
                justify-content: center;
                span{
                    cursor: pointer;
                    width: 80px;
                    line-height: 30px;
                    text-align: center;
                    background: #3f98ff;
                    font-size: 14px;
                    color: #fff;
                }
            }
        }
        .solution-box {
            .common-title {
                .title-name span {
                    color: #2A2424;
                }

                .title-eng, .title-desc {
                    color: gray;
                }
            }
            .solution-item1{
                background: url("../../assets/img/solution1.png");
                height: 480px;
            }
            .solution-item2{
                background: url("../../assets/img/solution2.png");
                height: 480px;
            }
            .solution-item3{
                background: url("../../assets/img/solution3.png");
                height: 480px;
            }
            .bottom-text-box{
                width: 100%;
                height: 80px;
                background-image: linear-gradient(180deg, rgba(37,36,36,0.15) 0%, #101010 100%);
                position: absolute;
                bottom: 0;
                p{
                    position: absolute;
                    left: 3%;
                    top: 20%;
                    font-size: 30px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    text-align: center;
                }
            }

            .solution-item{
                background: #FFFFFF;
                box-shadow: 0 6px 10px 0 #d8d8d8;

                img {
                    vertical-align: middle;
                    margin: 63px 140px 75px 140px;
                }

                p {
                    background: #FFFFFF;
                    /*line-height: 80px;*/
                    text-align: center;
                    font-size: 30px;
                    color: #1F1F1F;
                    line-height: 46px;
                    letter-spacing: 0.2px;
                }
            }
            .button-position {
                left: 50%;
                .more-case {
                    background-image: url("../../assets/img/button1.png");
                    background-repeat: no-repeat;
                    line-height: 0;
                    padding-right: 195px;
                    padding-bottom: 50px;
                    background-size: 197px 50px; /*调整图片的大小*/
                    display: inline-block;
                    text-indent: -999px;
                }
            }
        }
        .news-box{
            width: 100%;
            margin: 0 auto;
            background: url('../../assets/img/background02.png') no-repeat center;
            background-size: 100% 100%;
            .news-item-box{
                width: 1438px;
                position: relative;
                margin-left: auto ;
                margin-right: auto;
                .news-item{
                    background: #FFFFFF;
                    box-shadow:0 6px 10px 0 #d8d8d8;
                    img{
                        width: 100%;
                        height: 100%;
                        vertical-align: middle;
                    }
                    p{
                        background:#FFFFFF;
                        /*line-height: 80px;*/
                        text-align: center;
                        font-size: 30px;
                        color: #1F1F1F;
                        line-height: 46px;
                        letter-spacing: 0.2px;
                    }
                }
            }
        }
        .business-box{
            margin-top: 80px;
            position: relative;
            .business-img{
                width: 100%;
                height: 950px;
                object-fit: cover;
                vertical-align: middle;
            }
            .common-title{
                padding-top: 0;
                padding-bottom: 0;
                position: absolute;
                width: 100%;
                left: 0;
                top: 35px;
                .title-name span {
                    color: #2A2424;
                }
                .title-eng, .title-desc{
                    color: gray;
                }
            }
        }
        .partner-box{
            background: url("../../assets/img/background03.png");
            .switch-span{
                display: flex;
                justify-content: center;
                span{
                    cursor: pointer;
                    width: 126px;
                    height: 26px;
                    border:1px solid #4a90e2;
                    text-align: center;
                    line-height: 24px;
                    font-size: 14px;
                    color:#4a90e2;
                    margin: 0 7px;
                }
                .switch-active{
                    background: #4a90e2;
                    color: #fff;
                }
            }
            .partner-list{
                width: 1200px;
                margin: 60px auto 0;
            }
        }
    }
}

</style>

