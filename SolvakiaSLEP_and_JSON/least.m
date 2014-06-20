% y = y(idx);
A = A';
y = Y; % for single class (Side label)
Term = cellstr(dictionary);
% This is the parameter for sparsity
% we need to play with sparsity and 10 fold cross validation 
rho=0.003;          % the regularization parameter
                    % it is a ratio between (0,1), if .rFlag=1
opts=[];
opts.init=0;        % 0 for least squares, 2 for logistic
opts.tFlag=5;       % run .maxIter iterations
opts.maxIter=100;   % maximum number of iterations
opts.nFlag=0;       % without normalization
opts.rFlag=1;       % the input parameter 'rho' is a ratio in (0, 1)
opts.mFlag=0;       % 0 for non-smooth, 1 for smooth 
opts.lFlag=0;       % 0 for the Armiho Goldstein rule, 1 for the adaptive line search


%------------------- LeastR -------------------------

disp('Run LeastR for R/CR two classes');
tic;
[x, FunVal, ValueL] = LeastR(A, y, rho, opts);
toc; 

% idx = find(sum(x,2));
% zeroRows = any(x == 0, 2);
% x(zeroRows, :) = [];

%Result_leastR = [cellstr(Term(idx)) num2cell(x)];
Result_leastR = [cellstr(Term) num2cell(x)];

Result_leastR = sortrows(Result_leastR,-2);

% fileID = fopen([fileList{k} '.csv'],'w');
% for i=1:length(Result_leastR(:,1)),
%        fprintf(fileID,'%s,%d\n',Result_leastR{i,:});
% end
% fclose(fileID);