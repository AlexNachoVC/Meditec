import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_RuF1lmQT.mjs';
import { $ as $$Image } from './_astro_assets_BlX11tkN.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "name": "CloudHealth",
  "excerpt": "El centro de soluciones a tus necesidades como Profesional de la Salud.",
  "image": "/images/patrocinadores/cloudhealth.png",
  "categories": ["Salud"],
  "url": "https://www.cloudhealth.mx/"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/patrocinadores/cloudhealth.mdx";
const file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/content/patrocinadores/cloudhealth.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/content/patrocinadores/cloudhealth.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
