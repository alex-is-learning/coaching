<% await tp.file.include(tp.file.find_tfile("TemplateBase")) %>
---
tags:
  - <%* tR += tp.config.template_file.basename.toLowerCase().replace(' ', '-') %>
image: "[[default.png]]"
aliases:
species:
current-location:
party-status:
  -
---
- This is what my character knows about this NPC.
# Above the Table
- This is what I know about this NPC that my character doesn't.