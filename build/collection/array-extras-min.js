YUI.add("array-extras",function(E){var C=E.Lang,D=Array.prototype,B=E.Array;B.lastIndexOf=(D.lastIndexOf)?function(A,F){return A.lastIndexOf(F);}:function(A,G){for(var F=A.length-1;F>=0;F=F-1){if(A[F]===G){break;}}return F;};B.unique=function(F,H){var A=F.slice(),G=0,J=-1,I=null;while(G<A.length){I=A[G];while((J=B.lastIndexOf(A,I))!==G){A.splice(J,1);}G+=1;}if(H){if(C.isNumber(A[0])){A.sort(B.numericSort);}else{A.sort();}}return A;};B.filter=(D.filter)?function(A,F,G){return D.filter.call(A,F,G);}:function(A,G,H){var F=[];B.each(A,function(K,J,I){if(G.call(H,K,J,I)){F.push(K);}});return F;};B.reject=function(A,F,G){return B.filter(A,function(J,I,H){return !F.call(G,J,I,H);});};B.every=(D.every)?function(A,F,G){return D.every.call(A,F,G);}:function(F,H,I){for(var G=0,A=F.length;G<A;G=G+1){if(!H.call(I,F[G],G,F)){return false;}}return true;};B.map=(D.map)?function(A,F,G){return D.map.call(A,F,G);}:function(A,G,H){var F=[];B.each(A,function(K,J,I){F.push(G.call(H,K,J,I));});return F;};B.reduce=(D.reduce)?function(A,H,F,G){return D.reduce.call(A,function(L,K,J,I){return F.call(G,L,K,J,I);},H);}:function(A,I,G,H){var F=I;B.each(A,function(L,K,J){F=G.call(H,F,L,K,J);});return F;};B.find=function(F,H,I){for(var G=0,A=F.length;G<A;G++){if(H.call(I,F[G],G,F)){return F[G];}}return null;};B.grep=function(A,F){return B.filter(A,function(H,G){return F.test(H);});};B.partition=function(A,G,H){var F={matches:[],rejects:[]};B.each(A,function(J,I){var K=G.call(H,J,I,A)?F.matches:F.rejects;K.push(J);});return F;};B.zip=function(F,A){var G=[];B.each(F,function(I,H){G.push([I,A[H]]);});return G;};B.forEach=B.each;},"@VERSION@");