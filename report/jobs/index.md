---
#Jekyll front matter

layout: report
title: "Report: 100 Jobs of the Future"
description: Experts have come together to predict 100 jobs of the future.
---
<h1>100 Jobs of the Future</h1>

In this report, the 100 jobs of the future are organised by broad category of application, such as ‘people jobs’, ‘hands on jobs’, and ‘data jobs’. This is to provide a simple scaffold to help people to browse among roles that may be of interest to them. Some jobs may fall into multiple broad categories, particularly those that involve use of digital technologies, but they are only represented once here to eliminate redundancy. The jobs are also coded by whether they exist now (albeit perhaps with a different name, different work context, or using different tools), or are predicted to emerge in the future.

The 100 jobs are listed here alphabetically under each broad category, you can also <a href="/browse/">browse them</a> in a more compact form.

<p>On this page:<br>
  <a href="#technology-jobs">Technology jobs</a> |
  <a href="#people-jobs">People jobs</a> |
  <a href="#business-and-law-jobs">Business and Law jobs</a> |
  <a href="#environment-jobs">Environment jobs</a> |
  <a href="#urban-jobs">Urban jobs</a> |
  <a href="#agriculture-jobs">Agriculture jobs</a> |
  <a href="#space-jobs">Space jobs</a> |
  <a href="#health-jobs">Health jobs</a> |
  <a href="#data-jobs">Data jobs</a> |
  <a href="#experience-jobs">Experience jobs</a>
</p>

## Technology jobs
{% assign jobno = 0 %}
{% for job in site.data.jobs %}
  {% if job.category == "tech" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## People jobs
{% for job in site.data.jobs %}
  {% if job.category == "people" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## Business and Law jobs
{% for job in site.data.jobs %}
  {% if job.category == "buslaw" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## Environment jobs
{% for job in site.data.jobs %}
  {% if job.category == "env" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## Urban jobs
{% for job in site.data.jobs %}
  {% if job.category == "urban" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## Agriculture jobs
{% for job in site.data.jobs %}
  {% if job.category == "ag" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## Space jobs
{% for job in site.data.jobs %}
  {% if job.category == "space" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## Health jobs
{% for job in site.data.jobs %}
  {% if job.category == "health" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## Data jobs
{% for job in site.data.jobs %}
  {% if job.category == "data" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

## Experience jobs
{% for job in site.data.jobs %}
  {% if job.category == "ex" %}
    {% assign jobno = jobno | plus: 1 %}
  <div>
    <h3 class="report-job-heading {% if job.new == "new" %}new{% endif %}" tabindex="0"><span>{{ jobno }}</span> {{ job.title }}</h3>
    <div class="report-job-details">
      {% assign paragraphs = job.full-description | newline_to_br | split: '<br />' %}
      {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
      {% unless job.image == nil %}<img src="/img/jobs/{{ job.image }}" alt="{{ job.title }} (Artists impression)">{% endunless %}
    </div>
  </div>
  {% endif %}
{% endfor %}

<p class="report-pagination"><a class="button chevron" href="/report/references/">Next section</a></p>
