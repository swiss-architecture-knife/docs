---
sidebar_position: 1
slug: /
---

# Intro

Creating technical documentation for system and software architecture is needed to pass on knowledge in the organization. In the best case, some architects will document the bigger picture. But the devil is usually in the detail: many questions require specific technical knowledge which can only be answered by the development team. 
The teams themselves often have in-depth expertise, but have not documented this for a variety of reasons.

One reason for this is that many people simply <Highlight>don't like writing</Highlight> by nature. With this attitude, it becomes even more difficult to get people to document technical things.
Even if people are in the mood to document their knowledge, they are faced with the fact that their writings may be <Highlight>outdated in a few months</Highlight>. So, is it worth the effort to write something down, if it is irrelevant in the future?

After having struggled with that existential question, it is often difficult to find the home for those notes. Wikis tend to have a proliferation of structure - which is in the nature of wikis. 
And that's another problem: <Highlight>How to 
structure the content</Highlight> and <Highlight>how 
can you connect this structure with your real-life 
assets</Highlight>, e.g. your hosts, clusters, zones?

All these problems are familiar to anyone who works in the software or IT industry. And of course there are plenty of solutions on the market that tackle these problems in one way or another.

But they
- cost a lot of money
- or have no connection to your [configuration management database (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) or inventory system, resulting in outdated documentation
- or are not suitable for structured documentation purposes
- or do not cover all relevant things of your architecture.

__swark__, the _Swiss Architecture Knife_, is born from those reasons.

Being realists, we do not claim that we will solve the original problems immediately or in the far future with swark. But a vision makes it easier where we want to go:

:::tip[Vision]
__In future, we will be able to integrate and manage software systems better because there will no longer be any knowledge silos in the software industry.__
:::

Derived from the original problem and the target vision, we come to the following mission:

:::tip[Mission]
__swark's mission is to make the complexity of software systems within IT landscapes transparent for all roles involved.
swark motivates its users to share their knowledge in the operation and development of their software with others in a structured way.__
:::

## Our goals

### Making it fun to create cool, technical documentation.
swark's Markdown editor is awesome and has live collaboration. We want you to have to the same experiece as if you would be using Atlassian Confluence.

### Being the place for dumping all your hidden knowledge about your infrastructure
swark uses existing frameworks like [arc42](https://arc42.org/) to give you the right places and structures to dump your knowledge.

### Explaining your software and IT landscape to others
By dynamically generating diagrams based upon your architecture, you can easily explain complex environments to your team and external auditors and vendors.

### Giving you the freedom adapt it to your needs
swark's underlying data model and its software architecture allows you to extend it to your needs. 

### Up-to-date with your infrastructure
Having standardized API endpoints, you can ingest your infrastructure assets and statusses

### Finding *things* and speaking the same language
swark's naming schema supports you in finding the right assets.

### Integratable in your infrastructure
We drive the on-premises first approach and make authentication via OIDC and LDAP part of its core features. Also, authorization backed by groups and claims will be part of swark's core.

## Our audience (That's you!)

Let us you give some pithy sentences:

- You have a technical background, coming from a DevOps/software engineer role and evolved into some kind of technical architect role.
- You have been annoyed that there are documentation or information silos due to financial reasons (licensing, seating) and therefore cannot answer your team's questions in a satisfying and time-saving way.
- Putting such sensitive information into some cloud service seems totally fishy to you.
- Even more, why is it so difficult and expensive to pull in data into one of those cloud services?
- Those architecture diagrams are too old and do not reflect the current state.
- Why do I have to repeat the same information for different target group again and again?
- Why is this infrastructure information stored in Excel? And why has it not been updated?
- Where do get those information for our ISO 27001/NIS2/KRITIS/DORA/TISAX certification and how can I make the auditor happy?

Do you recognise yourself in one or more sentences? If so, swark is probably interesting for you.

## Our strategy
What is our strategy to achieve those ambitous goals?

1. swark is primarily focused on the European Union market. It's primary language is English.
2. swark is a free and open source solution with an open-core model.
3. swark leverages already existing open source solutions to achieve its goals.
4. We use our fictious company "Lumen" to demonstrate all the features on a living object.

## Future financing
Software development costs a __lot__ of money. At the moment, our company [dreitier GmbH](https://dreitier.com) from Germany funds all the development efforts for swark. We provide consulting and advisory for DevOps and software/system architecture. Due to our history, we have strictly rejected any venture capital for our own company: we are completely self-funded.
As part of our [transparency and honesty principles](https://dreitier.com/en/company/philosophy/core-values), we want to be clear about our financing strategy. Making swark a self-sustainable software and puting more development efforts requires money. Easy as it is.

### Funding from the EU
We are trying to gather an official funding from the European Union. We strongly believe that swark can strengthen our company's ability to build better and faster software.

### Open-core model
swark uses the open-core business model.

#### Non-core/Enterprise features
You can enable __every__ feature of swark by an `Enable Enterprise features` setting. When you enable that setting and you do __not__ have purchased a plan (see below), your users see a nagging header and footer.
If we see that this model does not work, we might move those extensions to the marketplace in the future - users with a proper plan will still have free access to the extensions in the marketplace.

### Plans
||Open-source plan|EU Enterprise plan|Non-EU Enterprise plan|
|---|---|---|---|
|Pricing|Free of charge|tbd|tbd, but more expensive than EU|
|Payment conditions|None, no credit card required - it's open source|per seat/per month|per seat/per year/upfront|
|Core features|Managing of configuration items, OIDC, Entra AD, LDAP|Same|Same|
|Enterprise features|SCIM, Kerberos, Kubernetes operators|Same|Same|
|Nagging with non-core features disabled|No|Yes|Yes|
|Updates via|ZIP file, Docker image|ZIP file, Docker image, Helm, Composer repository|Same|
|Official support|No|Yes|Yes|
|Free access to official swark extensions|No|Yes|Yes|

### dreitier's advisory
[dreitier](https://dreitier.com) sells [advisories](https://dreitier.com/en/services/advisory). If you purchase [one of our advisories](https://dreitier.com/en/services/advisory), you automatically receive a proper swark _Enterprise_ plan. 

### Marketplace
To integrate external services, one will be able to publish an extension in our marketplace. If you decide to get paid for the extension, we receive a percentage provision of the sale. Paid extensions must be published through our marketplace - open source extensions can be published anywhere.
Enterprises with a proper purchased plan have free access to extensions, published by the swark organization.

### swark as a service
dreitier holds the exclusive right to host swark for customers and make money from that. Other juristical or natural persons are not allowed to make money with swark by hosting it directly or indirectly for other organizations.