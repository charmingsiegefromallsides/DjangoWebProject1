"""
Definition of views.
"""

from datetime import datetime
import json
from django.shortcuts import render
from django.http import HttpRequest
from django.urls import path


import urllib.request
import xml.etree.ElementTree as ET
import random
from django.http import JsonResponse

def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def contact(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/contact.html',
        {
            'title':'Contact',
            'message':'Your contact page.',
            'year':datetime.now().year,
        }
    )

def about(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
            'message':'Your application description page.',
            'year':datetime.now().year,
        }
    )


  

def geturl(request):
    try:
        touhouname=request.POST['tag']
       
        query_string='https://safebooru.org/index.php?page=dapi&s=post&q=index&tags='+touhouname+'&limit=1'
        response = urllib.request.urlopen(query_string)
        # Read the response
        data = response.read()
        root=ET.fromstring(data.decode('utf-8'))
        max_=''
        for x in root.attrib:
            if x=='count':
                max_=root.attrib[x]
                break;
        
        rand_num=random.randint(0,int(max_))
        query_string+="&pid="+str(rand_num)

        response = urllib.request.urlopen(query_string)
        data=response.read()
        root=ET.fromstring(data.decode('utf-8'))
        elem=root.find('./post')
        #print(root.elem['post'].attrib['file_url'])
        urls=str(elem.attrib['file_url'])
        print("generated url: "+urls+" for touhou: " + touhouname)
    except:
        print("some error occuured")
        return JsonResponse({'url': "ERROR"})
    
    return JsonResponse({'img': urls})
