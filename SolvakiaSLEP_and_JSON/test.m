
termvalstruct={};
for i=1:(length(Result_logisticR))
    
   if i==7
       continue;
   end
    %s=struct(Result_logisticR{i,1},Result_logisticR{i,2})
    s={Result_logisticR{i,1},Result_logisticR{i,2}}
    termvalstruct{i} = s;
    
end

rootstruct = struct('SLEP',termvalstruct);