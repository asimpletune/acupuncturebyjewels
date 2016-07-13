# Acupuncture by Jewels

Client wants to have a nice site, with a clean, simple design that doesn't cost too much and that she can easily update on her own.

## Initial assessment

My initial impression after looking at both her current [free site](http://www.corecareclinic.com/how-i-practice) and the one she [pays for](http://acubyjewels.com) is that she's currently paying way too much and not receiving much value in return. Let's break down what could be improved.

### [www.coreclinic.com](http://www.corecareclinic.com/how-i-practice)

* Design  
  * Left nav has way too many links
  * Way too many different and often garish colors that don't feel very theraputic
  * Very narrow content section with way too wide margins
  * Drop shadow makes the site feel dated
  * Admin stuff mixed in with customer facing content
  * In general just feels overwhelming
  * Visual design isn't *terrible* but it's certainly dated
* Engineering
  * Site loads quite slowly for a static html site
  * Doesn't work on mobile
  * Fluid layout, non-existent (i.e. horizontal scrollbars, etc...)
  * Google analytics is a plus
  * SEO: meta, google site registration, keywords,
  * scripts: jquery, some home-rolled stuff, google analytics, and a share feature
    * Uses js to resize? (and script is located at top of page???)
    * Inline styles...
  * One site stylesheet, not too bad
* Overall impression: this site is really web 1.0, doesn't really seem to serve the clients needs, and could be much improved.

### www.acubyjewels.com

* Design
  * Absolutely way too much going on in the nav
  * Super scattered textual layout. Looks more like the sunday paper with the way the flow of the content is. Everything's interrupted by images and all sorts of stuff.
  * Again, drop shadow... :(
  * There's just so much going on here that I don't even know what to say.
* Engineering
  * Again, loads extremely slowly
  * Doesn't work on mobile
  * Layout issues
  * They seem to just be using a wordpress plugin for their "SEO"
  * head
    * Google analytics
    * facebook stuff
    * robots directions
    * bunch of comments from different wordpress plugins
    * A lot of links and scripts
  * body
    * scripts at top?
    * jquery, mostly wordpress stuff
* Overall impression: it's a different kind of bad from the free site, but it's nonetheless awful in its own right. Basically, they've taken a free service, i.e. wordpress, mucked it up, and then charged their client an arm a leg for something that she could do for free.

## Moving forward

Acupuncture is about holistically healing the root causes, not treating symptoms, which will be the theme for recommendation. From a design perspective, I'm envisioning a clean, multi-section landing page with lots of nice open space and beautiful imagery. Talking about therapy is one thing, but it's more effective to simply *show* them the therapy. In other words, the website should be representative of what an acupuncture/massage session is actually like.

It will take some questions to find out what kind of content the client will want included, but as minimal as possible of a nav would be ideal. So, going from a clean, multi-section landing page, there should be a transparent, floating top nav that shrinks as you scroll down, with a few links. Probably a blog link, contact link, and home of course. I'm not sure what else. Everything about acu and the client can be addressed on the landing.

So now the engineering. Going with the theme, I think it should be coded with the aid of a simple static site generator, with the code stored on github. This is for a few reasons.

* You can't control what all the wordpress stuff is doing and after looking at her pay site I feel less inclined every day to use them.
* For what the client needs, honestly a simple static site is actually easier to make and maintain
* Storing it in github means that if she ever wants someone to work on it in the future, it'll be fairly straightforward, because it's canonical for any developer
* Site will load very fast
* A backend content editor can still be used for easily updating, etc...

I'll have to research who I want to go with for this. Something like jekyll would probably be easiest for me, but it'd make it difficult to update content, so I'll see what I can find. There's probably something that operates on top of jekyll, but we'll see. Ideally she can just click on what she wants to change and just edit the code right there in the page. Preferably no markdown, though it's pretty easy to learn to use.

## Compensation

So, coding the site for scratch is probably beyond the scope quid pro quo, but I can definitely do the research for finding the write static site generator/CRM etc... I can also work within the context of a bootstrap template and edit it the way the client wants. Basically everything except for a boutique hand tailored site. Also, I can't promise IE compatibility, which would make the work 10x and it would just never be worth it, even if I was paid.

In other words, the client will get a nice clean site that she can update on her own with a blog and all her info, but I won't code it for scratch or handle IE issues.

No idea how long it'll take. Honestly, it could be done in a day, but I'll probably just take my time, there's no rush.

## Q/A

What sections of your site do you think are most important?

* First, I want them to book and appt. with me
* Buy the yet to be released package
* Image, and "About"
* Info about what acupuncture actually is
* What is different about Jewels' acupuncture
  * Allergy elim
  * NET (emotional)
  * Acu + massage
  * Detox cleans (retreats)
  * etc...
* Contact/hours
