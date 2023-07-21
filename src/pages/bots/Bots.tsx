import React, { Fragment, useState } from "react";
import "./bots.css";
import SideBar from "../../components/sideBar/SideBar";

import Breadcrumbs, { BreadcrumbsItem } from "@atlaskit/breadcrumbs";
import HomeIcon from "@atlaskit/icon/glyph/home";
import TextArea from "@atlaskit/textarea";




import Drawer from '@atlaskit/drawer';

import Button from "@atlaskit/button/standard-button";
import Form, {
  ErrorMessage,
  Field,
  FormHeader,
  FormSection,
} from "@atlaskit/form";

import Select, { ValueType } from "@atlaskit/select";
import SectionMessage from "@atlaskit/section-message";

const Bots = () => {

  const [open, setOpen] = useState<boolean>(false);


  interface Option {
    label: string;
    value: string;
  }

  const algorithm = [
    { label: "Bot Kullanıcı Algortiması", value: "botKullaniciAlgoritmasi" },
  ];

  const Icon = <HomeIcon label=" icon" size="medium" />;
  return (
    <div className="bots">
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
      <div className="bots-container">
        <div>
          <Breadcrumbs>
            <BreadcrumbsItem iconBefore={Icon} href="/" text="Anasayfa" />
            <BreadcrumbsItem href="/hizmetler" text="Hizmetler" />
            <BreadcrumbsItem href="/hizmetler/bots" text="Bots" />
          </Breadcrumbs>
        </div>
        <div className="bots-text">
          <h2>Bots</h2>
          <p>
            Her algoritma farklı değer sonuçları vermektedir. İlgili algoritmaya
            istenilen bilgileri girerek sogulama yapabilirsiniz.
          </p>
        </div>
        <hr className="cizgi" />
        <div className="bots-algoritmalar">
          <div className="bots-algoritmalar-item">
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
                    <h2>Algoritma Seçiniz</h2>
                    <Field<ValueType<Option>>
                      name="algortihms"
                      label="Algoritma Tipini Seçiniz *"
                    >
                      {({ fieldProps: { id }, error }) => (
                        <Fragment>
                          <Select<Option>
                            inputId={id}
                            defaultInputValue="Bot Kullanıcı Algortiması"
                            defaultOptions={algorithm}
                            defaultValue={algorithm[0]}
                            options={algorithm}
                          />
                          {error && <ErrorMessage>{error}</ErrorMessage>}
                        </Fragment>
                      )}
                    </Field>
                  </FormHeader>
                  <br />
                  <hr className="cizgi" />
                  <br />
                  <FormSection>
                    <Field name="UserCount" label="">
                      {({ fieldProps }: any) => (
                        <Fragment>
                          <TextArea placeholder="UserCount" {...fieldProps} />
                        </Fragment>
                      )}
                    </Field>
                    <Field name="UserCount" label="">
                      {({ fieldProps }: any) => (
                        <Fragment>
                          <TextArea placeholder="UserCount" {...fieldProps} />
                        </Fragment>
                      )}
                    </Field>
                    <Field name="UserCount" label="">
                      {({ fieldProps }: any) => (
                        <Fragment>
                          <TextArea placeholder="UserCount" {...fieldProps} />
                        </Fragment>
                      )}
                    </Field>
                    <Field name="UserCount" label="">
                      {({ fieldProps }: any) => (
                        <Fragment>
                          <TextArea placeholder="UserCount" {...fieldProps} />
                        </Fragment>
                      )}
                    </Field>
                  </FormSection>
                  <br />

                  <Button appearance="primary">Sorgulama Yap</Button>
                </form>
              )}
            </Form>
          </div>
          <div className="dikey" />
          <div className="bots-algoritmalar-sonuc">
            <h2>Bot kullanıcı algoritması sonucu</h2>
            <SectionMessage title="This text positive" appearance="success">
              <p
                style={{
                  fontWeight: 600,
                }}
              >
                %96 Bots.
              </p>
            </SectionMessage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bots;
