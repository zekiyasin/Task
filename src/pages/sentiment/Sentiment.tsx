import React, { Fragment, useState } from "react";
import "./sentiment.css";
import SideBar from "../../components/sideBar/SideBar";



import Drawer from '@atlaskit/drawer';

import Breadcrumbs, { BreadcrumbsItem } from "@atlaskit/breadcrumbs";
import HomeIcon from "@atlaskit/icon/glyph/home";

import TextArea from "@atlaskit/textarea";

import Button from "@atlaskit/button/standard-button";
import Form, { Field, FormHeader, FormSection } from "@atlaskit/form";

import SectionMessage from "@atlaskit/section-message";
const Sentiment = () => {
  const Icon = <HomeIcon label=" icon" size="medium" />;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="sentiment">
      <div className='resposive-side'>
        <div className='big'>
        <SideBar />
        </div>
        <div className='small'>
        <Drawer onClose={() => setOpen(false)} isOpen={open}>
        <SideBar />
      </Drawer>
      <Button appearance="primary" onClick={() => setOpen(true)}>
      Hizmetler Menü
      </Button>
        
        </div>

      
      </div>
      <div className="sentiment-container">
        <div>
          <Breadcrumbs>
            <BreadcrumbsItem iconBefore={Icon} href="/" text="Anasayfa" />
            <BreadcrumbsItem href="/hizmetler" text="Hizmetler" />
            <BreadcrumbsItem href="/textanalysis" text="Text Analysis" />
            <BreadcrumbsItem href="/hizmetler/sentiment" text="Sentiment" />
          </Breadcrumbs>
        </div>
        <div className="sentiment-text">
          <h2>Sentiment</h2>
          <p>
            Her algoritma farklı değer sonuçları vermektedir. İlgili algoritmaya
            istenilen bilgileri girerek sogulama yapabilirsiniz.
          </p>
        </div>

        <hr className="cizgi" />

        <div className="sentiment-form">
          <Form<{ algorithm: string; UserCount: string }>
            onSubmit={(data) => {
              console.log("form data", data);
              return new Promise((resolve) => setTimeout(resolve, 2000)).then(
                () =>
                  data.algorithm === "error"
                    ? { algorithm: "IN_USE" }
                    : undefined
              );
            }}
          >
            {({ formProps }) => (
              <form {...formProps}>
                <FormHeader title="">
                  <h2>Sorgulama Alanı</h2>
                </FormHeader>

                <div className="form-margin">
                  <FormSection>
                    <div className="sentiment-form-text">
                      <Field name="UserCount" label="">
                        {({ fieldProps }: any) => (
                          <Fragment>
                            <TextArea
                              placeholder="Enter long form text here"
                              {...fieldProps}
                            />
                          </Fragment>
                        )}
                      </Field>
                      <Button appearance="primary">Sorgulama Yap</Button>
                    </div>
                  </FormSection>
                </div>
              </form>
            )}
          </Form>
        </div>

        <div className="mesaj">
          <SectionMessage title="" appearance="success">
            {" "}
          </SectionMessage>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
