<template>
    <div class="partner-page">
        <el-row :gutter="21">
            <div class="partner-item-box"  v-for="(item, index) in partnerData" :key="index">
                <div class="partner-item">
                    <img class="img" :src="item">
                </div>
            </div>
        </el-row>
    </div>
</template>

<script>
import partner1 from '../../assets/img/partner/logo1.png';
import partner2 from '../../assets/img/partner/logo2.png';
import partner3 from '../../assets/img/partner/logo3.png';
import partner4 from '../../assets/img/partner/logo4.png';
import partner5 from '../../assets/img/partner/logo5.png';
import partner6 from '../../assets/img/partner/logo6.png';
import partner7 from '../../assets/img/partner/logo7.png';
import partner8 from '../../assets/img/partner/logo8.png';
import partner9 from '../../assets/img/partner/logo9.png';
import partner10 from '../../assets/img/partner/logo10.png';
import partner11 from '../../assets/img/partner/logo11.png';
import partner12 from '../../assets/img/partner/logo12.png';
import partner13 from '../../assets/img/partner/logo13.png';
import partner14 from '../../assets/img/partner/logo14.png';
import partner15 from '../../assets/img/partner/logo15.png';
import partner16 from '../../assets/img/partner/logo16.png';
import partner17 from '../../assets/img/partner/logo17.png';
import partner18 from '../../assets/img/partner/logo18.png';
import partner19 from '../../assets/img/partner/logo19.png';
import partner20 from '../../assets/img/partner/logo20.png';


export default {
    data() {
        return {
            partnerData: [
                partner1, partner2, partner3, partner4, partner5, partner6,
                partner7, partner8, partner9, partner10, partner11,
                partner12, partner13, partner14, partner15, partner16, partner17,
                partner18, partner19, partner20
            ],
        };
    },
};
</script>

<style lang="scss">
@import "../../assets/css/global.scss";
.partner-page{
    @media screen and (max-width: 767px) {
        width: 90%;
        margin: 0 auto;
        .el-col{
            margin-bottom: 15px;
        }
        .partner-item{
            padding: 30px 0;
            border-radius:8px;
            box-shadow:0 0 10px 0 rgba(216,216,216,0.68);
            text-align: center;
            img{
                width: 80%;
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1200px) {
        width: 80%;
        margin: 0 auto;
        .el-col{
            margin-bottom: 20px;
        }
        .partner-item{
            height: 180px;
            border-radius:8px;
            box-shadow:0 0 10px 0 rgba(216,216,216,0.68);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    @media screen and (min-width: 1201px) {
        width: 1200px;
        margin: 0 auto;
        .el-col{
            margin-bottom: 28px;
        }
        .partner-item-box {
            background: #FFFFFF;
            width: 18%;
            height: 104px;
            float: left;
            margin: 25px 10px 25px 10px;
            border-radius: 4px;
            box-shadow: 0 0 10px 0 rgba(216, 216, 216, 0.68);
            display: flex;
            justify-content: center;
            align-items: center;
            .partner-item {
                .img{
                    margin: 10px 25px 10px 18px;
                    width: 90%;
                    height: 90%;
                }
            }
        }
    }
}
</style>
