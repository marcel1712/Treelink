import React from "react";
import Header from "./header"
import Section from "./genericSectionTreePage";
import TreeBuilder from "../style/treebuilder.css"
import ContentTreeLink from "./contentTreeLink";
import MemberContent from "./memberContent";
import MemberCompnent from "./memberCompnent";

export default () => {
    return(
        <>
          <Header></Header>
          <nav className="Main-treebuilder">
            <Section title="Família">
              <ContentTreeLink />

            </Section>
            <Section title="Árvore">
              <MemberCompnent>
                
              </MemberCompnent>
            </Section>
            <Section title="Membros">
              <MemberContent />
            </Section>
          </nav>
        </>
    )
}