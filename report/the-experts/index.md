---
#Jekyll front matter

layout: report
title: "Report: 100 Jobs of the Future"
description: Experts have come together to predict 100 jobs of the future.
---
<h1>The Experts</h1>
<p class="intro">Following are the eleven experts interviewed to explore and speak to the current trends and discoveries made in the literature. Based on the experience they bring from their fields of expertise, they helped to design the 100 Jobs of the Future. Each expert represents someone who can speak with authority and with transdisciplinary understandings on future work in their domains.</p>

{% for expert in site.data.experts %}
  <div id="{{ expert.name | replace: ' ', '-' | downcase }}" class="expert {% cycle "odd", "even" %}">
    <div class="expert-details">
      <div class="expert-image"><img src="/img/experts/{{ expert.image }}" alt=""></div>
      <h2 class="expert-name">{{ expert.name }}</h2>
      <p class="expert-org">{{ expert.organisation }}</p>
    </div>
    <div class="expert-profile">
      {% assign paragraphs = expert.profile | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
    </div>
    <div class="expert-article">
      {% assign paragraphs = expert.article | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
    </div>
  </div>
{% endfor %}

<p class="report-pagination"><a class="button chevron" href="/report/work-futures/">Next section</a></p>
