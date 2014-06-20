% y = y(idx); 
%A = A';
%automate calculating y
%call TMG TFIDF:

feature('DefaultCharacterSet', 'UTF8')
filename='./Data/Slovakia/plain';

addpath('./../jsonlab_1.0beta/jsonlab');
%addpath('./../TMG_5.0R6');
%addpath('./../SLEP_package_4.1');


file1='C:/Users/Sultan/Documents/research/Paper1/Solvakia/jsonSample/json-with-org_type.json';
%loadjson(file1)
opt=[];

jsonRequest = fileread(file1);
jsonRoot = loadjson(jsonRequest);
number_of_doc = length(jsonRoot.response.docs);
doc_content{number_of_doc}=[];
id{number_of_doc}=[];
org_type{number_of_doc}=[];

delete('./Data/Slovakia/plain/L/*.txt');
delete('./Data/Slovakia/plain/R/*.txt');

for i=1:number_of_doc
    doc_content{i} = jsonRoot.response.docs{i}.h_file_content;
    id{i} =  jsonRoot.response.docs{i}.doc_id;
    org_type{i} = jsonRoot.response.docs{i}.org_type;
    thepath = './Data/Slovakia/plain/R/';
    if(strcmp('L',  org_type{i}))
        thepath = './Data/Slovakia/plain/L/';
    end
    docfilename=[thepath id{i} '.txt']
    fileID = fopen(docfilename,'w');
    fprintf(fileID,'%s',doc_content{i});
    fclose(fileID);
end

% delete files fron folders

% writing files:

OPT = struct('use_mysql', 0, 'delimiter', 'none_delimiter', 'line_delimiter', 1, 'stemming', 0, 'min_length', 3, 'max_length', 30, ...
        'min_local_freq', 1, 'min_global_freq', 1, 'max_local_freq', inf, 'max_global_freq', inf, ...
        'local_weight', 't', 'global_weight', 'x', 'normalization', 'x', 'dsp', 1);

[A, dictionary, global_weights, normalization_factors, words_per_doc, titles, files, update_struct]=tmg(filename, OPT);
A = A';
L = dir('./Data/Slovakia/plain/L/*.txt');
Num_L = length(L(not([L.isdir])));

R = dir('./Data/Slovakia/plain/R/*.txt');
Num_R = length(R(not([R.isdir])));

y=[ones(Num_L,1);-ones(Num_R,1)];

%y = Y; % for single class (Side label)
Term = cellstr(dictionary);

% This is the parameter for sparsity
% we need to play with sparsity and 10 fold cross validation 
rho=0.0002;         % the regularization parameter
                    % it is a ratio between (0,1), if .rFlag=1
opts=[];
opts.init=2;        % 0 for least squares, 2 for logistic
opts.tFlag=5;       % run .maxIter iterations
opts.maxIter=100;   % maximum number of iterations
opts.nFlag=0;       % without normalization
opts.rFlag=1;       % the input parameter 'rho' is a ratio in (0, 1)
opts.sWeight=[1,1]; % set the weight for positive and negative samples. For logistic only
opts.mFlag=0;       % 0 for non-smooth, 1 for smooth 
opts.lFlag=0;       % 0 for the Armiho Goldstein rule, 1 for the adaptive line search

%------------------- LogisticR -------------------------

disp('Run LogisticR for two classes(R/CR)');
tic;
[x, c, funVal, valueL]= LogisticR(A, y, rho, opts);
toc; 

idx = find(sum(x,2));

Result_logisticR = [cellstr(Term(idx)) num2cell(x(idx))];

Result_logisticR = sortrows(Result_logisticR,-2);


termvalstruct={};
for i=1:(length(Result_logisticR))
    
   if i==7
       continue;
   end
    %s=struct(Result_logisticR{i,1},Result_logisticR{i,2})
    s={Result_logisticR{i,1},Result_logisticR{i,2}}
    termvalstruct{i} = s;
    
end



jsonResponse = savejson(termvalstruct);
