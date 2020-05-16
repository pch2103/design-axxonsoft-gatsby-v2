import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import PageCard from "./pageCard";

export default ({cardName}) => {

	const data = useStaticQuery(graphql` 
	query{
    allContentfulContentCard {
    	edges {
      	node {
        	id
        	cardName
        	titleRU
        	textRU {
          	textRU
        	}
        	imageRU {
        		title
            file {
              url
            }
        	}
        	downloadUrlRU
      	}
    	}
    }
  }
`)
	let cardContent = 'not found'
	const cardDraft = React.useMemo(() => (
			data.allContentfulContentCard.edges
					.find(({node}) => cardName === node.cardName)
	), [data, cardName])

	if(cardDraft){
		cardContent = {
			id: cardDraft.node.id,
			title: cardDraft.node.titleRU,
			text: cardDraft.node.textRU.textRU,
			image: cardDraft.node.imageRU,
			downloadUrl: cardDraft.node.downloadUrlRU,
		}
	}

	return <PageCard cardContent = {cardContent}/>
}