/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    versions: [
      {
        title: 'v14.0',
        selected: true
      },
    ],
    pages: [
      {
        title: 'Adobe Workfront',
        path: '/'
      },
      {
        title: 'API Reference',
        menu: [{
          title: 'API Reference v14.0',
          description: 'Adobe Workfront API',
          path: '/api/index.md'
        }, {
          title: 'API Reference v14.0',
          description: 'API Spec for the Adobe Workfront',
          path: '/api/14.md'
        }]
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/',
        pages: [
          {
            title: 'Overview',
            path: '/guides/'
          },
          {
            title: 'Creating an OAuth Client',
            path: '/guides/creating_oauth_client/'
          },
          {
            title: 'OAuth using cURL',
            path: '/guides/oauth_using_curl/'
          },
          {
            title: 'OAuth using POSTMAN',
            path: '/guides/oauth_using_postman/'
          },
          {
            title: 'JWT Authentication',
            path: '/guides/jwt_authentication/'
          }
        ]
      },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/workfront/docs/'
};
