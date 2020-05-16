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
        	titleEN
        	textEN {
          	textEN
        	}
        	imageEN {
        		title
            file {
              url
            }
        	}
        	downloadUrlEN
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
			title: cardDraft.node.titleEN,
			text: cardDraft.node.textEN.textEN,
			image: cardDraft.node.imageEN,
			downloadUrl: cardDraft.node.downloadUrlEN
		}
	}

	return <PageCard cardContent = {cardContent}/>
}