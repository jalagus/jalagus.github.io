import React from 'react';
import SplitBlock from './SplitBlock';
import paperWriting from '../img/paper-writing.jpg';


function ResearchOutput() {
  return (
    <div className="publicationList">
      <h2>PhD Thesis</h2>
      <div>
      J. Lagus. Transformations and document similarities in word embedding spaces, Unigrafia 2023.
      </div>      
      <h2>Publications</h2>
      <div>
        <ul>
          <li>J. Lagus, E. Kotliarova, S. Björkqvist. Patent Classification on Search-Optimized Graph-Based Representations, PatSemTech 2023.</li>
          <li>J. Lagus, N. Loppi, A. Klami. Second-order Document Similarity Metrics for Transformers, ICNLPS 2022.</li>
          <li>J. Lagus, A. Klami. Optimizing singular value based metrics for document similarity comparisons, ICNLPS 2022.</li>
          <li>J. Lagus, A. Klami. Learning to lemmatize in the word representation space, NODALIDA 2021.</li>
          <li>F. Robertson, J. Lagus, K. Kajava. A COVID-19 news coverage mood map of Europe, EACL Hackashop 2021.</li>
          <li>J. Lagus, J. Sinkkonen, A. Klami, Low-rank approximations of second-order document representations, CoNLL 2019.</li>
          <li>A. Klami, J. Lagus, J. Sakaya. Lambert Matrix Factorization, ECML 2018.</li>
          <li>J. Lagus, K. Longi, A. Klami, A. Hellas. Transfer Learning Methods in Programming Course Outcome Prediction, ACM TOCE 2018.</li>
        </ul>     
      </div>
    </div>
  );
}

function Publications() {
  return (
    <div className="content">
      <SplitBlock
        component={<ResearchOutput />}
        image={paperWriting} />
    </div>
  );
}

export default Publications;