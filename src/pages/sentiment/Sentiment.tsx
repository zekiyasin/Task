import React, { Fragment } from "react";
import "./sentiment.css";
import SideBar from "../../components/sideBar/SideBar";

import Breadcrumbs, { BreadcrumbsItem } from "@atlaskit/breadcrumbs";
import HomeIcon from "@atlaskit/icon/glyph/home";

import TextArea from "@atlaskit/textarea";

import Button from "@atlaskit/button/standard-button";
import Form, { Field, FormHeader, FormSection } from "@atlaskit/form";

import SectionMessage from "@atlaskit/section-message";
const Sentiment = () => {
  const Icon = <HomeIcon label=" icon" size="medium" />;

  return (
    <div className="sentiment">
      <SideBar />
      <div className="sentiment-container">
        <div>
          <Breadcrumbs>
            <BreadcrumbsItem iconBefore={Icon} href="/" text="Anasayfa" />
            <BreadcrumbsItem href="/hizmetler" text="Hizmetler" />
            <BreadcrumbsItem href="/hizmetler/bots" text="Bots" />
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

                <div className="sentiment-form-text">
                  <FormSection>
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
                  </FormSection>

                  <Button appearance="primary">Sorgulama Yap</Button>
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
