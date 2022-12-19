/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Card, CardActions, CardHeader, Typography } from "@mui/material";


const BioInstagram = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/yo.jpg"
        width={100}
        height={100}
        quality={95}
        alt="Foto de perfil"
      />
      {author?.name && (
        <Container>
          <Box>
            <Card>
              <CardHeader>
                <Typography>Mi nombre es <strong>{author.name}</strong></Typography>
              </CardHeader>
              <p>Teléfono: 7531043367</p>
              <p>Email: <a href="mailto:xoyoc_l2@hotmail.com">xoyoc_l2@hotmail.com</a></p>
              <CardActions>
                <a href="https://www.xoyoc.net">
                  Mi sitio Web
                </a>
              </CardActions>
            </Card>
          </Box>
        </Container>
      )}
    </div>
  )
}

export default BioInstagram
