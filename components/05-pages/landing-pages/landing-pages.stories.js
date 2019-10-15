import React from 'react';
import { storiesOf } from '@storybook/react';
import { hrefTo } from '@storybook/addon-links';

import { globalData } from '../../../.storybook/globalData';

import home from './home.twig';

/**
 * Add storybook definition for Landing Pages.
 */
hrefTo('Pages/Content Types', 'Article').then((url) => {
  storiesOf('Pages/Landing Pages', module)
    .add('Home', () => (
      <div dangerouslySetInnerHTML={{
        __html: home({
          page_layout_modifier: globalData.page_layout_modifier,
          menu_items: globalData.main_menu,
          breadcrumb: globalData.breadcrumb,
          social_menu__items: globalData.social_menu__items,
          footer_menu__items: globalData.footer_menu__items,
          card_link_url: url,
        }),
      }}
      />
    ));
});
