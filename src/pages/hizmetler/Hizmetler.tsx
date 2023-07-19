import React from 'react'
import "./hizmetler.css"
import SideBar from '../../components/sideBar/SideBar'


import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import { Box } from '@atlaskit/primitives';


import AppSwitcherIcon from "@atlaskit/icon/glyph/app-switcher";
import IssuesIcon from "@atlaskit/icon/glyph/issues";
import {BsGraphUpArrow} from "react-icons/bs";
import {MdGTranslate} from "react-icons/md";
import { CaroselCard } from '../../components/caroselCard';

const Hizmetler = () => {

  const data = [
    {
      icon: <BsGraphUpArrow color="white" size="30" />,
      title: "Sentiment Analiz Sorgu Hizmeti",
      desc: "Our mission is to unleash the potential in every team.",
    },
    {
      icon: <IssuesIcon primaryColor="white" size="large" label="" />,
      title: "Bots Sorgu Hizmeti",
      desc: "Our mission is to unleash the potential in every team.",
    },
    {
      icon: <MdGTranslate color="white" size="30"  />,
      title: "Translate Hizmeti",
      desc: "Our mission is to unleash the potential in every team.",
    },
    {
      icon: <AppSwitcherIcon primaryColor="white" size="large" label="" />,
      title: "Aspect Base Sentiment",
      desc: "Our mission is to unleash the potential in every team.",
    },
  ];





  return (
    <div className='hizmetler'>
      <SideBar />
      <div className='hizmet-section'>
        <div className='text-section'>
          <h2>Ücretsiz paketlere göz atın</h2>
          <p>
            Temeller, ilgi çekici düzenler ve uçtan uca kullanıcı deneyimleri oluşturmak için gereken yazılımsal öğelerdir.
          </p>
          <a href="/hizmetler">Hizmetleri Keşfedin <Box><ArrowRightIcon size="medium" label="" /></Box>  </a>

        </div>
        <ul>
          {data.map((item, index) => (
            <CaroselCard icon={item.icon} desc={item.desc} title={item.title} key={index}/>
          
          ))}
        </ul>

        
      </div>
    </div>
  )
}

export default Hizmetler