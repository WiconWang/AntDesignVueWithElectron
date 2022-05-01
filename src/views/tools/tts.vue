<template>
  <a-page-header
    title="Title"
    sub-title="This is a subtitle"
    @back="goHomePage"
  />
  <div class="mainBox">
  <a-form
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        label="文本"
        name="text"
        :rules="[{ required: true, message: '请输入文本!' }]"
    >
      <a-textarea v-model:value="formState.text" placeholder="请输入文本!" :rows="12"
                  :showCount="true"
                  :maxlength="300" />
    </a-form-item>
    <a-button type="primary" html-type="submit">1. 生成</a-button>
    <br>

    <a-form-item
        label="结果链接"
        name="res"
    >
      <a-input class="url" v-model:value="url" :rows="6"></a-input>
    </a-form-item>
    <br>

    <a-button type="primary" html-type="submit" @click="download">2. 下载</a-button>
  </a-form>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';

import { getTTSResult } from '@/api/tools'
import {message} from "ant-design-vue";
import {useRouter} from "vue-router";

interface FormState {
  text: string;
}
export default defineComponent({
  name: 'tts', //路由组件名称
  isRouter: true,  //是否自动为路由
  isComponents: false,  // 是否自动注册为公共组件
  setup() {
    const url = ref<string>('');

    const formState = reactive<FormState>({
      text: ''
    });
    const warning = (text) => {
      message.warning(text, 2000);
    };

    const onFinish = (values: any) => {
      url.value = ""
      getTTSResult(values).then(res => {
        if (res.code === 0) {
          url.value = res.data.url
          console.log(res.data.url)
        }
      }).catch(function(err) {
        warning(err)
        console.log(err)
      })


    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
      warning(errorInfo)
    };
    const download = () => {
      const a = document.createElement('a');
      document.body.appendChild(a)
      a.style.display = 'none'
      // 使用获取到的blob对象创建的url
      a.href = url.value;
      a.target = "_blank"
      // 指定下载的文件名，就‘’写默认的下载名字。不指定他就根据上传名直接下载了宝。
      a.download = '';
      a.click();
      document.body.removeChild(a)
      // 移除blob对象的url
      window.URL.revokeObjectURL(url.value)
    };

    // 跳转路由，注意 useRouter需要在方法外
    const router = useRouter();
    const goHomePage = () => {
      console.log(router);
      router.push({ name: "TEMPFILE" });
    };


    return {
      url,
      formState,
      onFinish,
      onFinishFailed,
      download,
      warning,
      goHomePage
    };
  },
});
</script>

<style lang="less" scoped>

.mainBox {
  font-size: 16px;
  width: 80%;
  //border: #9a6e3a 1px solid;
  margin: 0 auto
}

</style>



