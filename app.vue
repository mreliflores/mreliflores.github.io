<template>
<div
  class="topNavBar"
>
  <NavBar />
</div>
<div
  class="bod"  
  :style="{
  backgroundColor: isDark
  ? appConfig.colorsDark.backgroundColor_
  : appConfig.colorsLight.backgroundColor_,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}">

  <Banner id="Home"/>
  
  <div id="Skills"
    :style="{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      'padding-top':'60px'
    }"
  >
    <AtomText
      theme="h1"
      color="textPrimaryColor"
    >
      Skills
    </AtomText>
  </div>
  <div class="skillsDescription">
    <SkillsCards v-for="card in dataSkills">
      <template #title>
        {{ card.title }}
      </template>
      <template #logoSkillCard>
        <component
          :is="card.logo"
          :color="isDark
          ? appConfig.colorsDark.primaryColor_
          : appConfig.colorsLight.primaryColor_"
          size="25px"
        />
      </template>
      <template
        #skillDescription
      >
        <span v-html="card.description"></span>
      </template>
      <template #technologies>
        <component
        v-for="(logo, index) in card.techs"
        :index="index"
        :is="logo"
        size="35px"
        :color="isDark
        ? appConfig.colorsDark.primaryColor_
        : appConfig.colorsLight.primaryColor_"
        />
      </template>
    </SkillsCards>

  </div>
  <div id="Experience"
    :style="{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      'padding-top':'60px'
    }"
  >
    <AtomText
      theme="h1"
      color="textPrimaryColor"
    >
      Experience
    </AtomText>
  </div>
  
  <div :style="{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%'
  }">
    <ExpCard v-for="info in dataExp">
      <template #icon>
        <component
        :is="info.icon"
        :color="isDark
        ? appConfig.colorsDark.backgroundColor_
        : appConfig.colorsLight.backgroundColor_
        "
        size="1.7em"
        />
      </template>
      <template #time>
        {{ info.time }}

      </template>
      <template #nameJob>
        {{ info.nameJob }}

      </template>
      <template #placeJob>
        {{ info.placeJob }}

      </template>
      <template #jobDescription >
        <component
          v-for="desc in info.jobDescription"
          is="div"
        >
          - {{ desc }}
        </component>
      </template>
    </ExpCard>
  </div>

  <div id="Contact"
    :style="{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      'padding-top':'60px'
    }"
  >
    <AtomText
      theme="h1"
      color="textPrimaryColor"
    >
      Contact me
    </AtomText>
  </div>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '90%',
    }"
  >
    <AtomText
      theme="h4"
      color="textSecondaryColor"
    >
      If you want to connect with me
      you have two communication channels. The first one
      WhatsApp +58-412-0392857, I'm
      always available and online there.
      The last one you can email me
      at eli1998flores@gmail.com.
      Another social media are listed
      below
    </AtomText>
    <div
    :style="{
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '2em 0'
    }"
    >
      <a
      href="https://github.com/mreliflores"
      target="_blank"
      >
        <MdiGithub
          :color="isDark
          ? appConfig.colorsDark.textPrimaryColor
          : appConfig.colorsLight.textPrimaryColor"
          size="2em"
        />
      </a>
      <a
      href="https://www.linkedin.com/in/mreliflores/"
      target="_blank"
      >
        <MdiLinkedin 
          :color="isDark
          ? appConfig.colorsDark.textPrimaryColor
          : appConfig.colorsLight.textPrimaryColor"
          size="2em"
        />
      </a>
    </div>
  </div>
</div>
</template>


<script lang="ts">
import '~/assets/css/mainPage.css'
import '~/assets/css/main.css'
export default {
  data() {
    const widthExpCard = ''
    return {
      widthExpCard
    }
  },
  setup() {
    const LogosJavascript = resolveComponent('LogosJavascript')
    const DeviconHtml5 = resolveComponent('DeviconHtml5')
    const VscodeIconsFileTypeCss = resolveComponent('VscodeIconsFileTypeCss')
    const LogosReact = resolveComponent('LogosReact')
    const LogosVue = resolveComponent('LogosVue')
    const LogosNuxtIcon = resolveComponent('LogosNuxtIcon')

    const BiMortarboard = resolveComponent('BiMortarboard')
    const MaterialSymbolsDeveloperModeTvOutlineSharp = resolveComponent('MaterialSymbolsDeveloperModeTvOutlineSharp')

    const VscodeIconsFileTypePython = resolveComponent('VscodeIconsFileTypePython')
    const SimpleIconsMysql = resolveComponent('SimpleIconsMysql')

    const MaterialSymbolsDataThresholdingOutline = resolveComponent('MaterialSymbolsDataThresholdingOutline')
    
    const SimpleIconsScikitlearn = resolveComponent('SimpleIconsScikitlearn')
    const VscodeIconsFileTypeNumpy = resolveComponent('VscodeIconsFileTypeNumpy')
    const SimpleIconsPandas = resolveComponent('SimpleIconsPandas')
    const SimpleIconsScipy = resolveComponent('SimpleIconsScipy')
    const DeviconPlainMatplotlib = resolveComponent('DeviconPlainMatplotlib')

    const GameIconsTeacher = resolveComponent('GameIconsTeacher')
    const GuidanceLaboratory = resolveComponent('GuidanceLaboratory')


    
    const dataExp = [
      {
        time: 'September-2022 - Today',
        icon: GuidanceLaboratory,
        nameJob: 'Research Assistant',
        placeJob: 'Laser Spectroscopy Laboratory (UCV)',
        jobDescription: [
          ' Software development to control laboratory equipment using python, arduino and tkinter',
          'Instrumentation.'
        ],
      },
      {
        time: 'January-2019 – Today',
        icon: GameIconsTeacher,
        nameJob: 'Private classes: Physics, Maths and Programming',
        placeJob: '',
        jobDescription: [
          'Teaching of physics, maths and programming to pre-college and college students'
        ],
      },
      {
        time: ' January-2019 – March 2020',
        icon: GameIconsTeacher,
        nameJob: 'Teaching Assistant',
        placeJob: 'Demonstration Laboratory (UCV)',
        jobDescription: [
          'Experiments used to teach undergraduate physics classes.'
        ],
      },
    ]

    const dataSkills = [
      {
        title: 'Physics',
        logo: BiMortarboard,
        description: 'As a graduated in physics I have a strongly problem-solving skills and enjoy when I work in challenging projects. As well a strong understanding in maths.',
        techs: []
      },
      {
        title: 'Web Dev Tools',
        logo: MaterialSymbolsDeveloperModeTvOutlineSharp,
        description: 'In order to build beautiful UI in web dev I manage the following technologies.',
        techs: [LogosJavascript,
          DeviconHtml5,
          VscodeIconsFileTypeCss,
          LogosReact,
          LogosVue,
          LogosNuxtIcon,
        ]
      },
      {
        title: 'Data Science Approach',
        logo: MaterialSymbolsDataThresholdingOutline,
        description: "I am a data science student in <a href='https://assets.soyhenry.com/henry-landing/assets/Data-Science/Programa+DS_JUL2022.pdf' style=\'font-weight: 900\' target=\'_blank\'>Henry</a>. I have an advanced knowledge of python and MySQL, some libraries which I have expertise are listed below.",
        techs: [
        VscodeIconsFileTypePython,
        SimpleIconsScikitlearn,
        DeviconPlainMatplotlib,
        SimpleIconsPandas,
        VscodeIconsFileTypeNumpy,
        SimpleIconsScipy,
        SimpleIconsMysql,
        ]
      }
    ]
    const appConfig = useAppConfig().theme
    const isDark = useIsDark().isDark
    return {
      appConfig,
      isDark,
      dataSkills,
      dataExp
    }
  },
}

/*
<a href="https://www.soyhenry.com/" target="_blank" :style="{color: isDark
        ? appConfig.colorsDark.textLinkColor
        : appConfig.colorsLight.textLinkColor,
        fontWeight: '900'}">Henry</a>
*/
</script>
