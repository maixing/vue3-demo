import { defineComponent } from 'vue';
import './style.less';

const App = defineComponent({
  name: 'App',
  render() {
    return (
      <div class="nav">
        <router-view />
      </div>
    );
  },
});
export default App;
