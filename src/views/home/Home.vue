<template>
<!--  <div id="home">-->
<!--    <img alt="Vue logo" src="../../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
  <div id="home">
    <div :class="{'view-header-dark': style === 'dark', 'view-header-light': style === 'light'}">
      <!-- 手机和平板 -->
      <div class="hidden-lg-and-up header-content" >
        <div class="header-left">
          <img v-if="style === 'dark'" @click="goPage('index')" src="../../assets/img/logo01.png">
          <img v-if="style === 'light'" @click="goPage('index')" src="../../assets/img/logo02.png">
        </div>
        <div class="dropdown-box">
          <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                            <img v-if="style === 'dark'" src="../../assets/img/nav1.png">
                            <img v-if="style === 'light'" src="../../assets/img/nav2.png">
                        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="index">首页</el-dropdown-item>
              <el-dropdown-item command="sixian">关于思贤</el-dropdown-item>
              <el-dropdown-item command="qidian" divided>企典系统</el-dropdown-item>
              <el-dropdown-item command="duliang">度量系统</el-dropdown-item>
              <el-dropdown-item command="yunxin">产业云信</el-dropdown-item>
              <el-dropdown-item command="yuke">遇客系统</el-dropdown-item>
              <el-dropdown-item command="advantage" divided>核心优势</el-dropdown-item>
              <el-dropdown-item command="news">新闻中心</el-dropdown-item>
              <el-dropdown-item command="join">加入我们</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!-- 电脑 -->
      <div class="hidden-md-and-down header-content" >
        <div class="header-left">
          <img v-if="style === 'dark'" @click="goPage('index')" src="../../assets/img/logo01.png" style="cursor: pointer;">
          <img v-if="style === 'light'" @click="goPage('index')" src="../../assets/img/logo02.png" style="cursor: pointer;">
        </div>
        <div class="header-right">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="index">首页</el-menu-item>
<!--            <el-submenu index="product">-->
<!--              <template slot="title">产品服务</template>-->
              <el-menu-item index="productService">产品服务</el-menu-item>
              <el-menu-item index="solution">解决方案</el-menu-item>
<!--              <el-menu-item index="duliang">度量系统</el-menu-item>-->
<!--              <el-menu-item index="yunxin">产业云信</el-menu-item>-->
<!--              <el-menu-item index="yuke">遇客系统</el-menu-item>-->
<!--            </el-submenu>-->
<!--            <el-menu-item index="advantage">核心优势</el-menu-item>-->
            <el-menu-item index="news">新闻中心</el-menu-item>
            <el-menu-item index="seassoon">关于思贤</el-menu-item>
            <el-menu-item index="join">加入我们</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="view-content">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <!-- 底部 -->
    <div class="view-footer">
      <div class="footer-content">
        <div class="hidden-xs-only footer-nav">
          <img src="../../assets/img/logo01.png" @click="goPage('index')" style="cursor: pointer;">
          <div class="nav">
            <span @click="goPage('index')">首页</span>
            <span @click="goPage('sixian')">关于思贤</span>
            <span @click="goPage('qidian')">产品服务</span>
            <span @click="goPage('advantage')">核心优势</span>
            <span @click="goPage('news')">新闻中心</span>
            <span @click="goPage('join')">加入我们</span>
          </div>
        </div>
        <div class="footer-msg">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="8"  :lg="6">
              <div class="erweima" style="font-size: 0;">
                <img src="../../assets/img/erweima.png">
              </div>
            </el-col>
            <el-col :xs="24" :sm="16" :lg="18">
              <div class="msg">
                <p>咨询热线：021-33582102</p>
                <p>媒体合作：pr@seassoon.com</p>
                <p>公司邮箱：BD@seassoon.com</p>
                <p>公司地址：上海市虹漕路68号锦和中心6C <span>北京市朝阳区潘家园河南大厦611室</span> </p>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="certificate">
          <span style="cursor: pointer;" @click="goGongan">沪公网安备 31010402008221号</span>
          <span style="cursor: pointer;" @click="goGongxin">沪ICP备14042118号-1</span>
          <span>Copyright © 2019 思贤股份 SEASSOON Corporation,All Rights Reserved.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        activeIndex: '',
        style: 'dark',
      };
    },
    components: {},
    created() {},
    mounted() {
      if (this.$route.name === 'newdetail') {
        this.activeIndex = 'news';
      } else {
        this.activeIndex = this.$route.name;
      }
      if (document.documentElement && document.documentElement.scrollTop > 80) {
        this.style = 'light';
      } else if (document.body && document.body.scrollTop > 80) {
        this.style = 'light';
      } else {
        this.style = 'dark';
      }
      window.addEventListener('scroll', () => {
        if (document.documentElement && document.documentElement.scrollTop > 80) {
          this.style = 'light';
        } else if (document.body && document.body.scrollTop > 80) {
          this.style = 'light';
        } else {
          this.style = 'dark';
        }
      });
    },
    methods: {
      handleCommand(commond) {
        this.$router.push(`/${commond}`);
      },
      handleSelect(key) {
        this.$router.push(`/${key}`);
      },
      goPage(key) {
        this.activeIndex = key;
        this.$router.push(`/${key}`);
      },
      goGongxin() {
        window.open('http://www.beian.miit.gov.cn', '_blank');
      },
      goGongan() {
        window.open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402008221', '_blank');
      },
    },
  };
</script>

<style lang="scss">
  @import "../../assets/css/global.scss";
  #home{
    min-height:100vh;
    overflow-x: hidden;
    .view-header-dark{
      position: fixed;
      z-index: 20;
      width: 100%;
      top: 0;
      left: 0;
      background:  rgba(0,0,0,0);
      /*opacity:0.1;*/
      @media screen and (max-width: 767px) {
        .header-content{
          width: 100%;
          height: 60px;
          padding: 0 20px;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          align-items: center;
          .header-left{
            font-size: 0;
            img{
              width: 140px;
              height: auto;
            }
          }
          .el-dropdown-link{
            img{
              width: 28px;
              height: 28px;
            }
          }
        }
      }
      @media screen and (min-width: 768px) and (max-width: 1200px) {
        .header-content{
          width: 100%;
          height: 80px;
          padding: 0 20px;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          align-items: center;
          .header-left{
            font-size: 0;
          }
          .el-dropdown-link{
            img{
              width: 36px;
              height: 36px;
            }
          }
        }
      }
      @media screen and (min-width: 1201px) {
        .header-content{
          width: 1200px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          align-items: center;
          .header-left{
            font-size: 0;
          }
          .header-right{
            .el-menu{
              background-color: transparent;
            }
            .el-menu--horizontal{
              border-bottom: none;
            }
            .el-menu-item{
              height: 80px;
              padding: 0 32px;
              line-height: 80px;
              font-size: 18px;
              color: #fff;
            }
            .is-active{
              background-color: transparent;
            }
            .el-menu-item:hover{
              background-color: transparent;
            }
            .el-submenu:hover{
              background-color: transparent;
            }
            .el-submenu__title:hover{
              background-color: transparent;
            }
            .el-submenu__title{
              height: 80px;
              line-height: 80px;
              font-size: 18px;
              color: #fff;
            }
            .el-submenu__title i{
              color: #fff;
            }
            // .el-menu-item.is-active{
            //     border-bottom: 4px solid #fff;
            // }
            // .el-submenu.is-active .el-submenu__title{
            //     border-bottom: 4px solid #fff;
            // }
            .el-menu-item.is-active{
              border-bottom: none;
              position: relative;
            }
            .el-menu-item.is-active:after{
              position: absolute;
              content: '';
              width: 100px;
              height: 4px;
              background: #fff;
              left: calc((100% - 100px)/2);
              bottom: 0;
            }
            .el-submenu.is-active .el-submenu__title{
              border-bottom: none;
              position: relative;
            }
            .el-submenu.is-active .el-submenu__title:after{
              position: absolute;
              content: '';
              width: 100px;
              height: 4px;
              background: #fff;
              left: calc((100% - 100px)/2);
              bottom: 0;
            }
          }
        }
      }
    }
    .view-header-light{
      position: fixed;
      z-index: 20;
      width: 100%;
      top: 0;
      left: 0;
      background:  #061825;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      @media screen and (max-width: 767px) {
        .header-content{
          width: 100%;
          height: 60px;
          padding: 0 20px;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          align-items: center;
          .header-left{
            font-size: 0;
            img{
              width: 140px;
              height: auto;
            }
          }
          .el-dropdown-link{
            img{
              width: 28px;
              height: 28px;
              opacity: 0.71;
            }
          }
        }
      }
      @media screen and (min-width: 768px) and (max-width: 1200px) {
        .header-content{
          width: 100%;
          height: 80px;
          padding: 0 20px;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          align-items: center;
          .header-left{
            font-size: 0;
          }
          .el-dropdown-link{
            img{
              width: 36px;
              height: 36px;
              opacity: 0.71;
            }
          }
        }
      }
      @media screen and (min-width: 1201px) {
        .header-content{
          width: 1200px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          align-items: center;
          .header-left{
            font-size: 0;
          }
          .header-right{
            .el-menu{
              background-color: transparent;
            }
            .el-menu--horizontal{
              border-bottom: none;
            }
            .el-menu-item{
              height: 80px;
              padding: 0 32px;
              line-height: 80px;
              font-size: 18px;
              color: #FFFFFF;
            }
            .is-active{
              background-color: transparent;
            }
            .el-menu-item:hover{
              background-color: transparent;
            }
            .el-submenu:hover{
              background-color: transparent;
            }
            .el-submenu__title:hover{
              background-color: transparent;
            }
            .el-submenu__title{
              height: 80px;
              line-height: 80px;
              font-size: 18px;
              color: #4a4a4a;
            }
            .el-submenu__title i{
              color: #4a4a4a;
            }
            // .el-menu-item.is-active{
            //     border-bottom: 4px solid #3f98ff;
            // }
            // .el-submenu.is-active .el-submenu__title{
            //     border-bottom: 4px solid #3f98ff;
            // }
            .el-menu-item.is-active{
              border-bottom: none;
              position: relative;
            }
            .el-menu-item.is-active:after{
              position: absolute;
              content: '';
              width: 100px;
              height: 4px;
              background: #FFFFFF;
              left: calc((100% - 100px)/2);
              bottom: 0;
            }
            .el-submenu.is-active .el-submenu__title{
              border-bottom: none;
              position: relative;
            }
            .el-submenu.is-active .el-submenu__title:after{
              position: absolute;
              content: '';
              width: 100px;
              height: 4px;
              background: #FFFFFF;
              left: calc((100% - 100px)/2);
              bottom: 0;
            }
          }
        }
      }
    }
    .view-content{
      position: relative;
      z-index: 10;
      min-height: 100vh;
      @media screen and (max-width: 767px) {
        padding-top: 60px;
      }
      @media screen and (min-width: 768px) and (max-width: 1200px) {
        padding-top: 80px;
      }
      @media screen and (min-width: 1201px) {

      }
    }
    .view-footer{
      @media screen and (max-width: 767px) {
        position: relative;
        padding-bottom: 60px;
        background: url('../../assets/img/footer01.png') no-repeat center;
        background-size: cover;
        .footer-content{
          width: 90%;
          margin: 0 auto;
          .footer-nav{
            padding: 25px 0;
            border-bottom: 1px solid #fff;
            display: flex;
            align-items: center;
            img{
              width: 180px;
            }
            .nav{
              span{
                margin-left: 10px;
                font-size: 14px;
                color: #fff;
              }
            }
          }
          .footer-msg{
            padding: 25px 0 40px;
            .erweima{
              text-align: center;
              img{
                width: 100px;
                height: auto;
              }
            }
            .msg{
              padding-top: 16px;
              p{
                text-align: center;
                line-height: 30px;
                font-size: 14px;
                color: #fff;
                span{
                  margin-left: 20px;
                }
              }
            }
          }
          .certificate{
            position: absolute;
            width: 100%;
            padding: 10px 5%;
            background: rgba(23, 62, 106, 0.35);
            left: 0;
            bottom: 0;
            text-align: center;
            line-height: 20px;
            font-size: 14px;
            color: #fff;
            span{
              display: block;
            }
          }
        }
      }
      @media screen and (min-width: 768px) and (max-width: 1200px) {
        position: relative;
        padding-bottom: 90px;
        background: url('../../assets/img/footer01.png') no-repeat center;
        background-size: cover;
        .footer-content{
          width: 80%;
          margin: 0 auto;
          .footer-nav{
            padding: 25px 0;
            border-bottom: 1px solid #fff;
            display: flex;
            align-items: center;
            img{
              width: 180px;
            }
            .nav{
              span{
                margin-left: 10px;
                font-size: 14px;
                color: #fff;
              }
            }
          }
          .footer-msg{
            padding: 25px 0;
            .erweima{
              img{
                width: 160px;
                height: auto;
              }
            }
            .msg{
              p{
                line-height: 32px;
                font-size: 16px;
                color: #fff;
                span{
                  margin-left: 30px;
                }
              }
            }
          }
          .certificate{
            position: absolute;
            width: 100%;
            padding: 15px 10%;
            background: rgba(23, 62, 106, 0.35);
            left: 0;
            bottom: 0;
            text-align: center;
            line-height: 30px;
            font-size: 16px;
            color: #fff;
          }
        }
      }
      @media screen and (min-width: 1201px) {
        position: relative;
        padding-bottom: 80px;
        background: url('../../assets/img/footer01.png') no-repeat center;
        background-size: cover;
        /*background-size: 100% 100%;*/
        .footer-content{
          width: 1200px;
          margin: 0 auto;
          .footer-nav{
            padding: 35px 0;
            border-bottom: 1px solid #fff;
            display: flex;
            align-items: center;
            .nav{
              span{
                cursor: pointer;
                margin-left: 70px;
                font-size: 18px;
                color: #fff;
              }
            }
          }
          .footer-msg{
            padding: 35px 70px;
            .msg{
              p{
                line-height: 47px;
                font-size: 18px;
                color: #fff;
                span{
                  margin-left: 50px;
                }
              }
            }
          }
          .certificate{
            position: absolute;
            width: 100%;
            height: 80px;
            background: rgba(23, 62, 106, 0.35);
            left: 0;
            bottom: 0;
            text-align: center;
            line-height: 80px;
            font-size: 18px;
            color: #fff;
            span + span{
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
</style>
