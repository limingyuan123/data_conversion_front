<style scoped> 
@import "../assets/css/home.css";
</style>
<template>
  <div id="container">
    <!-- head部分，展示标题 -->
    <header>
      <div class="container">
        <h2 class="docs-header">UDX - Describe and express your data</h2>
      </div>
    </header>
    <!-- 介绍部分的菜单 -->
    <div class="left_menu" id="left_menu">
      <li id="m1">
        <strong class="menuFont">Getting Start</strong>
      </li>
      <li id="m2" class="active">
        <a href="#" class="menuFont" @click="active($event)">Welcome</a>
      </li>
      <li id="m3">
        <a href="#" class="menuFont" @click="active($event)">Describe</a>
      </li>
      <li id="m4">
        <a href="#" class="menuFont" @click="active($event)">Mapping</a>
      </li>
      <li id="m5">
        <a href="#" class="menuFont" @click="active($event)">Refactor</a>
      </li>
      <li id="m6">
        <strong class="menuFont">Link</strong>
      </li>
      <li id="m7">
        <a href="#" class="menuFont" @click="active($event)">UDX Show</a>
      </li>
      <li id="m8">
        <a href="#" class="menuFont" @click="active($event)">Operation</a>
      </li>
    </div>
    <!-- 右侧的介绍内容 -->
    <div class="right_menu" id="right_menu">
      <h2 style="font-size:40px;font-weight:bold">Getting Started</h2>
      <h3 style="line-height:30px">
        Are you listening to your customers? As they say: You cannot improve
        what you cannot measure; but the paradox is you cannot measure
        everything – happiness, hatred, anger… but you can measure customer
        satisfaction. Yes, you can measure customer satisfaction by analyzing
        likes and dislikes of your customers. You can gauge popularity of your
        website or products. You can also:
      </h3>
      <h2 style="font-size:30px">Welcome</h2>
      <h3 style="line-height:30px">
        Are you listening to your customers? As they say: You cannot improve
        what you cannot measure; but the paradox is you cannot measure
        everything – happiness, hatred, anger… but you can measure customer
        satisfaction. Yes, you can measure customer satisfaction by analyzing
        likes and dislikes of your customers. You can gauge popularity of your
        website or products. You can also: Are you listening to your customers?
        As they say: You cannot improve what you cannot measure; but the paradox
        is you cannot measure everything – happiness, hatred, anger… but you can
        measure customer satisfaction. Yes, you can measure customer
        satisfaction by analyzing likes and dislikes of your customers. You can
        gauge popularity of your website or products. You can also:
      </h3>
      <h2 style="font-size:30px">Describe</h2>
      <h3 style="line-height:30px">
        Are you listening to your customers? As they say: You cannot improve
        what you cannot measure; but the paradox is you cannot measure
        everything – happiness, hatred, anger… but you can measure customer
        satisfaction. Yes, you can measure customer satisfaction by analyzing
        likes and dislikes of your customers. You can gauge popularity of your
        website or products. You can also: Are you listening to your customers?
        As they say: You cannot improve what you cannot measure; but the paradox
        is you cannot measure everything – happiness, hatred, anger… but you can
        measure customer satisfaction. Yes, you can measure customer
        satisfaction by analyzing likes and dislikes of your customers. You can
        gauge popularity of your website or products. You can also: Are you
        listening to your customers? As they say: You cannot improve what you
        cannot measure; but the paradox is you cannot measure everything –
        happiness, hatred, anger… but you can measure customer satisfaction.
        Yes, you can measure customer satisfaction by analyzing likes and
        dislikes of your customers. You can gauge popularity of your website or
        products. You can also:
      </h3>
      <h2 style="font-size:30px">Mapping</h2>
      <h3 style="line-height:30px">
        Are you listening to your customers? As they say: You cannot improve
        what you cannot measure; but the paradox is you cannot measure
        everything – happiness, hatred, anger… but you can measure customer
        satisfaction. Yes, you can measure customer satisfaction by analyzing
        likes and dislikes of your customers. You can gauge popularity of your
        website or products. You can also: Yes, you can measure customer
        satisfaction by analyzing likes and dislikes of your customers. You can
        gauge popularity of your website or products. You can also:
      </h3>
      <h2 style="font-size:30px">Refactor</h2>
      <h3 style="line-height:30px">
        Are you listening to your customers? As they say: You cannot improve
        what you cannot measure; but the paradox is you cannot measure
        everything – happiness, hatred, anger… but you can measure customer
        satisfaction.
      </h3>
      <h2 style="font-size:40px;font-weight:bold">Link</h2>
      <h3 style="line-height:30px">
        Are you listening to your customers? As they say: You cannot improve
        what you cannot measure; but the paradox is you cannot measure
        everything – happiness, hatred, anger… but you can measure customer
        satisfaction. Yes, you can measure customer satisfaction by analyzing
        likes and dislikes of your customers. You can gauge popularity of your
        website or products. You can also: Are you listening to your customers?
        As they say: You cannot improve what you cannot measure; but the paradox
        is you cannot measure everything – happiness, hatred, anger… but you can
        measure customer satisfaction.
      </h3>
      <h2 style="font-size:30px">UDX Show</h2>
      <h3 style="line-height:30px">
        Are you listening to your customers? As they say: You cannot improve
        what you cannot measure; but the paradox is you cannot measure
        everything – happiness, hatred, anger… but you can measure customer
        satisfaction. Yes, you can measure customer satisfaction by analyzing
        likes and dislikes of your customers. You can gauge popularity of your
        website or products. You can also: satisfaction. Yes, you can measure
        customer satisfaction by analyzing likes and dislikes of your customers.
        You can gauge popularity of your website or products. You can also:
      </h3>
      <h2 style="font-size:30px">Operation</h2>
      <h3 style="line-height:30px">
        Are you listening to your customers? As they say: You cannot improve
        what you cannot measure; but the paradox is you cannot measure
        everything – happiness, hatred, anger… but you can measure customer
        satisfaction. Yes, you can measure customer satisfaction by analyzing
        likes and dislikes of your customers. You can gauge popularity of your
        website or products. You can also:  
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      activeNavIndex: "1"
    };
  },
  methods: {
    active(event) {
      console.log(event);
      var text = event.path[1].innerText;
      if (text === "Welcome") {
        this.unactive();
        var ele = document.getElementById("m2");
        ele.setAttribute("class", "active");
      } else if (text === "Describe") {
        this.unactive();
        var ele = document.getElementById("m3");
        ele.setAttribute("class", "active");
      } else if (text === "Mapping") {
        this.unactive();
        var ele = document.getElementById("m4");
        ele.setAttribute("class", "active");
      } else if (text === "Refactor") {
        this.unactive();
        var ele = document.getElementById("m5");
        ele.setAttribute("class", "active");
      } else if (text === "UDX Show") {
        this.unactive();
        var ele = document.getElementById("m7");
        ele.setAttribute("class", "active");
      } else if (text === "Operation") {
        this.unactive();
        var ele = document.getElementById("m8");
        ele.setAttribute("class", "active");
      }
    },
    unactive() {
      var ele = document.getElementById("m2");
      ele.setAttribute("class", "unactive");
      var ele = document.getElementById("m3");
      ele.setAttribute("class", "unactive");
      var ele = document.getElementById("m4");
      ele.setAttribute("class", "unactive");
      var ele = document.getElementById("m5");
      ele.setAttribute("class", "unactive");
      var ele = document.getElementById("m7");
      ele.setAttribute("class", "unactive");
      var ele = document.getElementById("m8");
      ele.setAttribute("class", "unactive");
    }
  },
  mounted() {
    //监听scroll事件,实现手写的sticky效果
    window.addEventListener("scroll", () => {
      var left_menu = document.getElementById("left_menu");
      var right_menu = document.getElementById("right_menu");
      if (right_menu.getBoundingClientRect().top <= 110) {
        left_menu.style.position = "fixed";
      } else if (right_menu.getBoundingClientRect().top > 110) {
        left_menu.style.position = "relative";
        // leftMenu.style.top = leftMenu.getBoundingClientRect().top +"px";
      }
      // console.log(right_menu.getBoundingClientRect().top);
    });

    window.addEventListener("", ()=>{

    })
  }
};
</script>