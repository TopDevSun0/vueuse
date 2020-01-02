import 'vue-tsx-support/enable-check'
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { createComponent } from '../api'
import { ShowDocs } from '../dev/storybook'
import { usePreferredColorScheme } from '.'

const Demo = createComponent({
  setup () {
    return {
      preferredColorScheme: usePreferredColorScheme(),
    }
  },

  render (this: Vue & any) {
    const {
      preferredColorScheme,
    } = this

    // @ts-ignore
    const Docs: any = <ShowDocs md={require('./index.md')} />

    return (
      <div>
        <div id='demo'>
          <p>Preferred Color Scheme: {preferredColorScheme.toString()}</p>
        </div>
        {Docs}
      </div>
    )
  },
})

storiesOf('Browser', module)
  .add('usePreferredColorScheme', () => Demo as any)
