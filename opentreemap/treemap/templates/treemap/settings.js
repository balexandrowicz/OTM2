// Data structures pull from django
var otm = otm || {};
otm.settings = otm.settings || {};

otm.settings.urls = {
    'filterQueryArgumentName': 'q'
}

otm.settings.instance = {
    'id': '{{ request.instance.id }}',
    'name': '{{ request.instance.name }}',
    'rev': '{{ request.instance.geo_rev_hash }}',
    'center': [{{ request.instance.center.x }}, {{ request.instance.center.y }}],
    'basemap': {
        'type': '{{ request.instance.basemap_type }}',
        'data': '{{ request.instance.basemap_data }}',
        'bing_api_key': '{{ BING_API_KEY }}'
    }
}
