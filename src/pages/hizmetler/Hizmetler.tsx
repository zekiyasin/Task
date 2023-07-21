import React, { useState } from 'react';
import "./hizmetler.css"
import SideBar from '../../components/sideBar/SideBar'

import Button from '@atlaskit/button/standard-button';

import Drawer from '@atlaskit/drawer';


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


  const [open, setOpen] = useState<boolean>(false);


  return (
    <div className='hizmetler'>
      <div className='resposive-side'>
        <div className='big'>
        <SideBar />
        </div>
        <div className='small'>
        <Drawer onClose={() => setOpen(false)} isOpen={open}>
        <SideBar />
      </Drawer>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open drawer
      </Button>
        
        </div>

      
      </div>
      
      <div className='hizmet-section'>
        <div className='text-section'>
          <h2>Ücretsiz paketlere göz atın</h2>
          <p>
            Temeller, ilgi çekici düzenler ve uçtan uca kullanıcı deneyimleri oluşturmak için gereken yazılımsal öğelerdir.
          </p>
          <a href="/hizmetler">Hizmetleri Keşfedin <Box><ArrowRightIcon size="medium" label="" /></Box>  </a>

        </div>
        <div className='hizmet-liste'>
          {data.map((item, index) => (
            <CaroselCard icon={item.icon} desc={item.desc} title={item.title} key={index}/>
          
          ))}
        </div>

        
      </div>
    </div>
  )
}

export default Hizmetler